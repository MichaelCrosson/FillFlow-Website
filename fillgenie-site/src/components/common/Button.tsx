import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className,
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sunlit-amber focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-sunlit-amber text-white hover:bg-opacity-90 hover:scale-105 shadow-md',
    secondary: 'bg-transparent border-2 border-sunlit-amber text-sunlit-amber hover:bg-sunlit-amber hover:text-white',
    text: 'text-sunlit-amber hover:text-opacity-80 underline-offset-4 hover:underline',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    // Check if it's an internal anchor link or external link
    const isInternalAnchor = href.startsWith('#') || href.startsWith('/#');
    const isExternalLink = href.startsWith('http') || href.startsWith('mailto:');
    
    if (isInternalAnchor || !isExternalLink) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
