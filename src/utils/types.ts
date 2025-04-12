import { ReactNode } from 'react';

export interface PlanProps {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface FeatureProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  className?: string;
}

export interface AccessibleButtonProps extends ButtonProps {
  role?: string;
  ariaExpanded?: boolean;
}

export interface ToastNotificationProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}