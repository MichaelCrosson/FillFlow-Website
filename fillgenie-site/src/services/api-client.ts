/**
 * API Client with automatic token refresh
 * Handles cookie-based authentication and Bearer token fallback
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export class APIClient {
  private baseURL: string;

  constructor(baseURL: string = API_URL) {
    this.baseURL = baseURL;
  }

  /**
   * Make an authenticated API request with automatic token refresh
   */
  async request(endpoint: string, options: RequestInit = {}) {
    // Try request with current access token (from cookie or Bearer header)
    let response = await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      credentials: 'include', // Include cookies
      headers: {
        ...options.headers,
        'Content-Type': 'application/json',
      },
    });

    // If 401 Unauthorized, try refreshing token
    if (response.status === 401) {
      const refreshed = await this.refreshToken();

      if (refreshed) {
        // Retry original request with new token
        response = await fetch(`${this.baseURL}${endpoint}`, {
          ...options,
          credentials: 'include',
          headers: {
            ...options.headers,
            'Content-Type': 'application/json',
          },
        });
      } else {
        // Refresh failed, clear tokens and redirect to login
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        
        // Only redirect if not already on login page
        if (!window.location.pathname.includes('/login')) {
          window.location.href = '/login';
        }
        
        throw new Error('Session expired');
      }
    }

    return response;
  }

  /**
   * Refresh the access token using the refresh token
   */
  private async refreshToken(): Promise<boolean> {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      if (!refreshToken) {
        return false;
      }

      const response = await fetch(`${this.baseURL}/api/v1/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Token refresh failed:', error);
      return false;
    }
  }

  /**
   * GET request
   */
  async get(endpoint: string) {
    const response = await this.request(endpoint, { method: 'GET' });
    return response.json();
  }

  /**
   * POST request
   */
  async post(endpoint: string, data?: any) {
    const response = await this.request(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
    return response.json();
  }

  /**
   * PUT request
   */
  async put(endpoint: string, data?: any) {
    const response = await this.request(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
    return response.json();
  }

  /**
   * DELETE request
   */
  async delete(endpoint: string) {
    const response = await this.request(endpoint, { method: 'DELETE' });
    return response.json();
  }
}

// Export singleton instance
export const apiClient = new APIClient();
