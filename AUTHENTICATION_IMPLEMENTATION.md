# FillFlow Authentication Implementation

**Version:** 2.0  
**Last Updated:** January 10, 2026  
**Status:** ✅ Implemented

---

## Overview

The FillFlow website now implements a complete JWT-based authentication system with the following features:

- **Cookie-based Authentication**: Secure httpOnly cookies for web security
- **Auto-refresh Tokens**: Seamless 15-minute access token renewal
- **Multi-session Support**: Login on multiple devices simultaneously
- **Persistent Login**: 30-day refresh tokens for long-term sessions
- **AWS Resource Isolation**: Per-user S3 prefixes and Pinecone namespaces

---

## Architecture

### Components Updated

#### 1. **AuthContext** (`src/contexts/AuthContext.tsx`)

**Features:**
- Session validation on app load
- Auto-refresh token logic
- Cookie-based authentication with localStorage backup
- Multi-device logout support

**Key Methods:**
```typescript
login(email, password)          // Login with email/password
register(email, password, name) // Create new account
logout()                        // Logout current session
logoutAll()                     // Logout all devices
refreshToken()                  // Refresh access token
```

**API Endpoints Used:**
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/register`
- `GET /api/v1/auth/me`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/auth/logout`
- `POST /api/v1/auth/logout-all`

#### 2. **API Client** (`src/services/api-client.ts`)

**Features:**
- Automatic token refresh on 401 errors
- Cookie credentials support
- Unified error handling
- Convenient REST methods (get, post, put, delete)

**Usage Example:**
```typescript
import { apiClient } from '@/services/api-client';

// Automatically handles auth and refresh
const data = await apiClient.get('/api/v1/documents');
const result = await apiClient.post('/api/v1/documents', { name: 'test.pdf' });
```

#### 3. **Login Page** (`src/pages/Login.tsx`)

**Features:**
- Combined login/register form
- Toggle between modes
- Field validation
- Error display
- Redirect after auth

**Field Mapping:**
- `name` (optional) → Sent to backend as `name` field
- `email` (required)
- `password` (required, 8+ chars)

#### 4. **Dashboard** (`src/pages/Dashboard.tsx`)

**Features:**
- User information display
- AWS resource IDs (S3 prefix, Pinecone namespace)
- Single device logout
- Multi-device logout with confirmation
- Getting started guide

**New Buttons:**
- "Logout" - Ends current session only
- "Logout All Devices" - Ends all active sessions

#### 5. **ProtectedRoute** (`src/components/auth/ProtectedRoute.tsx`)

**Features:**
- Session validation on mount
- Auto-refresh attempt before redirect
- Loading state during validation
- Remembers return URL

---

## Token Flow

### 1. Login/Register Flow

```
User enters credentials
    ↓
POST /api/v1/auth/login
    ↓
Backend returns:
  - access_token (15 min)
  - refresh_token (30 days)
    ↓
Frontend stores:
  - Cookies (httpOnly, secure)
  - localStorage (backup)
    ↓
GET /api/v1/auth/me
    ↓
User data loaded
    ↓
Redirect to dashboard
```

### 2. Auto-Refresh Flow

```
User makes API request
    ↓
API returns 401 Unauthorized
    ↓
APIClient detects 401
    ↓
POST /api/v1/auth/refresh
  Body: { refresh_token }
    ↓
Backend returns new tokens
    ↓
Update localStorage
    ↓
Retry original request
    ↓
Success!
```

### 3. Logout Flow

```
User clicks "Logout"
    ↓
POST /api/v1/auth/logout
    ↓
Backend revokes tokens
Backend clears cookies
    ↓
Frontend clears localStorage
    ↓
Redirect to login
```

---

## Storage

### Cookies (Primary)

Set by backend on login/register/refresh:

| Cookie | Lifetime | Flags |
|--------|----------|-------|
| `access_token` | 15 minutes | HttpOnly, Secure, SameSite=lax |
| `refresh_token` | 30 days | HttpOnly, Secure, SameSite=lax |

**Security:**
- JavaScript cannot access (HttpOnly)
- HTTPS only in production (Secure)
- CSRF protection (SameSite)

### localStorage (Backup)

Stored on frontend:

```javascript
localStorage.setItem('access_token', '...');
localStorage.setItem('refresh_token', '...');
```

**Use Cases:**
- Token refresh API calls
- Fallback if cookies fail
- Chrome extension integration (future)

---

## API Configuration

### Environment Variables

**Development (`.env`):**
```env
VITE_API_URL=http://localhost:8000
```

**Production (`.env`):**
```env
VITE_API_URL=https://api.fillflow.com
```

### CORS Requirements

Backend must allow:
```python
CORS_ORIGINS = [
    "http://localhost:5173",  # Vite dev server
    "http://localhost:3000",  # Alternative dev server
    "https://fillflow.com",
    "https://www.fillflow.com",
    "https://app.fillflow.com"
]
```

### Cookie Configuration

Backend must set:
```python
COOKIE_SECURE=true              # HTTPS only (production)
COOKIE_HTTPONLY=true            # No JavaScript access
COOKIE_SAMESITE=lax             # CSRF protection
COOKIE_DOMAIN=.fillflow.com     # Cross-subdomain (optional)
```

---

## User Data Structure

### Response from `/api/v1/auth/me`

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "user@example.com",
  "name": "John Doe",
  "full_name": "John Doe",
  "is_active": true,
  "created_at": "2026-01-01T00:00:00Z",
  "s3_bucket_prefix": "users/550e8400-e29b-41d4-a716-446655440000",
  "pinecone_namespace": "user_550e8400-e29b-41d4-a716-446655440000"
}
```

### Frontend User Interface

```typescript
interface User {
  id: string;
  email: string;
  name?: string;
  full_name?: string;
  s3_bucket_prefix?: string;
  pinecone_namespace?: string;
  is_active?: boolean;
  created_at?: string;
}
```

---

## Security Features

### 1. **Token Security**

- Access tokens expire in 15 minutes
- Refresh tokens expire in 30 days
- JTI (JWT ID) enables revocation
- All refresh tokens tracked in database

### 2. **Cookie Security**

- HttpOnly prevents XSS attacks
- Secure flag requires HTTPS
- SameSite prevents CSRF attacks
- Domain scoped to FillFlow only

### 3. **Password Security**

- SHA-256 pre-hash before bcrypt
- Bcrypt salt per password
- No plain text storage ever

### 4. **Multi-Session Security**

- Each device tracked separately
- User can revoke specific sessions (future)
- Logout all devices available
- IP and User-Agent logged

---

## Testing

### Manual Testing Checklist

- [ ] Register new account
- [ ] Login with correct credentials
- [ ] Login with wrong credentials (should fail)
- [ ] Access protected route when logged in
- [ ] Access protected route when logged out (should redirect)
- [ ] Stay logged in after page refresh
- [ ] Auto-refresh token after 15 minutes
- [ ] Logout (single device)
- [ ] Logout all devices
- [ ] Session persists across page reloads

### Test Accounts

```
Email: test@fillflow.com
Password: TestPassword123!
```

---

## Troubleshooting

### Issue: "Session expired" immediately after login

**Cause:** Server clock skew or JWT expiry misconfiguration  
**Solution:** Check backend JWT_ACCESS_TOKEN_EXPIRE_MINUTES setting

### Issue: Cookies not being set

**Cause:** CORS or HTTPS mismatch  
**Solution:**
1. Ensure `credentials: 'include'` in all fetch calls
2. Set `COOKIE_SECURE=false` in development
3. Check CORS allows credentials

### Issue: Token refresh loop

**Cause:** Refresh token expired or invalid  
**Solution:**
1. Clear localStorage
2. Clear cookies
3. Login again

### Issue: 401 on all requests

**Cause:** Token not being sent  
**Solution:**
1. Check cookies in DevTools (Application > Cookies)
2. Verify `credentials: 'include'` in fetch
3. Check localStorage has tokens

---

## Future Enhancements

### Planned Features

1. **Session Management UI**
   - View all active sessions
   - See device names, IPs, last used
   - Revoke individual sessions

2. **Email Verification**
   - Send verification email on registration
   - Email verification required for full access

3. **Password Reset**
   - Forgot password flow
   - Email with reset link
   - Secure token-based reset

4. **Two-Factor Authentication**
   - TOTP-based 2FA
   - Backup codes
   - SMS fallback (optional)

5. **OAuth Integration**
   - Google Sign-In
   - GitHub Sign-In
   - LinkedIn Sign-In

---

## Migration Notes

### From Legacy System

If upgrading from an older auth system:

1. Existing users must re-login to get new tokens
2. Old `authToken` and `authUser` localStorage keys are deprecated
3. New keys: `access_token`, `refresh_token`
4. Backend must implement `refresh_tokens` table

### Database Migration

```sql
-- Create refresh_tokens table
CREATE TABLE refresh_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token VARCHAR(512) UNIQUE NOT NULL,
    jti VARCHAR(64) UNIQUE NOT NULL,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at TIMESTAMP NOT NULL,
    revoked_at TIMESTAMP,
    is_revoked VARCHAR(10) DEFAULT 'false' NOT NULL,
    device_name VARCHAR(255),
    ip_address VARCHAR(45),
    user_agent VARCHAR(512),
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Add indexes
CREATE INDEX idx_refresh_token_user ON refresh_tokens(user_id);
CREATE INDEX idx_refresh_token_jti ON refresh_tokens(jti);
CREATE INDEX idx_refresh_token_expires ON refresh_tokens(expires_at);
CREATE INDEX idx_refresh_token_revoked ON refresh_tokens(is_revoked);
```

---

## API Documentation

For complete API endpoint documentation, see [FILLFLOW_LOGIN_SYSTEM.md](./FILLFLOW_LOGIN_SYSTEM.md)

---

## Contact

For questions or issues:

- **GitHub Issues**: https://github.com/fillflow/fillflow-website/issues
- **Email**: dev@fillflow.com
- **Documentation**: https://docs.fillflow.com

---

**Implementation Status:** ✅ Complete  
**Last Updated:** January 10, 2026  
**Next Review:** February 10, 2026
