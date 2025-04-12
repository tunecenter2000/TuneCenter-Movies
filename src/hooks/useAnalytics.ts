import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

interface PageView {
  path: string;
  title?: string;
}

const useAnalytics = () => {
  const location = useLocation();
  
  // Track page views
  useEffect(() => {
    trackPageView({
      path: location.pathname,
      title: document.title
    });
  }, [location]);
  
  // Initialize analytics (mock implementation)
  useEffect(() => {
    console.log('Analytics initialized');
    
    return () => {
      console.log('Analytics cleanup');
    };
  }, []);
  
  // Track page view
  const trackPageView = useCallback(({ path, title }: PageView) => {
    // In a real implementation, this would send data to your analytics service
    console.log(`Page view: ${path}${title ? ` - ${title}` : ''}`);
  }, []);
  
  // Track event
  const trackEvent = useCallback(({ category, action, label, value }: AnalyticsEvent) => {
    // In a real implementation, this would send event data to your analytics service
    console.log(`Event: ${category} - ${action}${label ? ` - ${label}` : ''}${value !== undefined ? ` - ${value}` : ''}`);
  }, []);
  
  // Track user
  const trackUser = useCallback((userId: string, traits?: Record<string, any>) => {
    // In a real implementation, this would identify the user in your analytics service
    console.log(`User: ${userId}${traits ? ` - ${JSON.stringify(traits)}` : ''}`);
  }, []);
  
  return {
    trackPageView,
    trackEvent,
    trackUser
  };
};

export default useAnalytics;