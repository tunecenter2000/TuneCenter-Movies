import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseLazyLoadProps<T> {
  initialItems?: T[];
  itemsPerPage?: number;
  fetchItems: (page: number, limit: number) => Promise<T[]>;
}

const useLazyLoad = <T>({
  initialItems = [],
  itemsPerPage = 10,
  fetchItems
}: UseLazyLoadProps<T>) => {
  const [items, setItems] = useState<T[]>(initialItems);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '200px 0px',
  });
  
  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const newItems = await fetchItems(page, itemsPerPage);
      
      if (newItems.length === 0 || newItems.length < itemsPerPage) {
        setHasMore(false);
      }
      
      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred while fetching items'));
    } finally {
      setIsLoading(false);
    }
  }, [fetchItems, page, itemsPerPage, isLoading, hasMore]);
  
  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);
  
  const reset = useCallback(() => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    setError(null);
  }, []);
  
  return {
    items,
    isLoading,
    error,
    hasMore,
    loadMoreRef: ref,
    reset,
    loadMore
  };
};

export default useLazyLoad;