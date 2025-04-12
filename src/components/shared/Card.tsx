import React from 'react';
import { CardProps } from '../../utils/types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick
}) => {
  const baseStyles = 'bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300';
  const hoverStyles = onClick ? 'hover:transform hover:scale-[1.02] cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;