import { useCallback, useEffect, useState } from 'react';

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  image?: string;
  order_id: string;
  handler: (response: any) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: {
    [key: string]: string;
  };
  theme?: {
    color?: string;
  };
}

interface UseRazorpayProps {
  onSuccess: (paymentId: string, orderId: string, signature: string) => void;
  onError: (error: any) => void;
}

const useRazorpay = ({ onSuccess, onError }: UseRazorpayProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load Razorpay script
  useEffect(() => {
    const loadRazorpayScript = async () => {
      if (window.Razorpay) {
        setIsLoaded(true);
        return;
      }

      setIsLoading(true);
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
        setIsLoading(false);
      };
      script.onerror = () => {
        setIsLoading(false);
        onError(new Error('Failed to load Razorpay SDK'));
      };
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, [onError]);

  // Initialize payment
  const initializePayment = useCallback(
    (options: Omit<RazorpayOptions, 'handler'>) => {
      if (!isLoaded) {
        onError(new Error('Razorpay SDK not loaded yet'));
        return;
      }

      try {
        const razorpay = new window.Razorpay({
          ...options,
          handler: (response: any) => {
            onSuccess(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature
            );
          },
          modal: {
            ondismiss: () => {
              console.log('Payment modal closed');
            },
          },
        });

        razorpay.open();
      } catch (error) {
        onError(error);
      }
    },
    [isLoaded, onSuccess, onError]
  );

  return {
    isLoaded,
    isLoading,
    initializePayment,
  };
};

export default useRazorpay;