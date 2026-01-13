import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-md border border-warm-sand p-6 transition-all duration-300',
        hover && 'hover:shadow-xl hover:-translate-y-1 hover:border-sunlit-amber',
        className
      )}
    >
      {children}
    </div>
  );
};
