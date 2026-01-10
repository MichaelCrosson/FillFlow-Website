import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading, refreshToken } = useAuth();
  const location = useLocation();
  const [isValidating, setIsValidating] = useState(true);

  // Validate session on mount
  useEffect(() => {
    const validateSession = async () => {
      if (!isAuthenticated && !isLoading) {
        // Try to refresh token before redirecting
        const refreshed = await refreshToken();
        if (!refreshed) {
          setIsValidating(false);
        }
      } else {
        setIsValidating(false);
      }
    };

    validateSession();
  }, [isAuthenticated, isLoading, refreshToken]);

  // Show loading state while checking authentication
  if (isLoading || isValidating) {
    return (
      <div className="min-h-screen bg-warm-sand flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-sunlit-amber"></div>
          <p className="mt-4 text-text-muted">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
