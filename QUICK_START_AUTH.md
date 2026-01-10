# Quick Start Guide - Testing Authentication

**Updated:** January 10, 2026  
**Version:** 2.0

## Prerequisites

Before testing authentication, ensure:

1. ✅ Backend API is running on `http://localhost:8000` (or production URL)
2. ✅ S3 bucket exists for document storage
3. ✅ Pinecone index exists for vector storage
4. ✅ PostgreSQL database is accessible with `users` and `refresh_tokens` tables
5. ✅ Backend CORS allows `http://localhost:5173` and credentials

## Environment Setup

### 1. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cd fillgenie-site
cp .env.example .env
```

Edit `.env`:

```env
# Development
VITE_API_URL=http://localhost:8000

# Production
# VITE_API_URL=https://api.fillflow.com
```

### 2. Start the Development Server

```bash
cd fillgenie-site
npm install  # If not already done
npm run dev
```

Website will be available at `http://localhost:5173`

## Step-by-Step Testing

### 1. Test User Registration

1. Navigate to `http://localhost:5173/login`
2. Click "Sign up" to switch to registration mode
3. Fill in the form:
   - **Email**: `test@fillflow.com`
   - **Password**: `TestPass123!`
   - **Name**: `Test User` (optional)
4. Click "Create Account"

**Expected Result**:
- Redirected to home page or dashboard
- Header shows "My Dashboard" button instead of "Login"
- Browser cookies have `access_token` and `refresh_token` (HttpOnly)
- localStorage has backup tokens
- Console shows successful registration

**Check in DevTools**:
```javascript
// Application > Cookies > http://localhost:5173
// Should see: access_token, refresh_token

// Console
localStorage.getItem('access_token')
localStorage.getItem('refresh_token')
```

### 2. View Dashboard

1. Click "My Dashboard" in the header
2. Should see welcome message with your name
3. Account info card shows:
   - Email address
   - Name
   - User ID (UUID)
   - Account status
   - S3 bucket prefix
   - Pinecone namespace
4. Logout buttons at bottom:
   - "Logout" (current device)
   - "Logout All Devices" (all sessions)

### 3. Test Login

1. Click "Logout" button in dashboard
2. You should be redirected to home page
3. Click "Login" in header
4. Fill in credentials:
   - **Email**: `test@fillflow.com`
   - **Password**: `TestPass123!`
5. Click "Log In"

**Expected Result**:
- Redirected to home page or dashboard
- Logged in state restored
- Dashboard accessible

### 4. Test Session Persistence

1. Refresh the page (F5)
2. Header should still show "My Dashboard"
3. You should still be logged in
4. Open new tab → Navigate to site → Should still be logged in
5. Close browser completely → Reopen → Should **still be logged in** (30-day refresh token)

### 5. Test Auto-Refresh Token

This happens automatically, but you can test it:

1. Login and note the time
2. Wait 15+ minutes (or modify JWT_ACCESS_TOKEN_EXPIRE_MINUTES to 1 for testing)
3. Make any API call (navigate to dashboard, etc.)
4. Token should auto-refresh in background
5. No interruption to user experience

**Check in DevTools Console**:
```javascript
// Should see new tokens after 15 min
localStorage.getItem('access_token')
// Different value than before!
```

### 6. Test Protected Routes

1. Click logout button
2. Try to access `/dashboard` directly in URL bar
3. Should redirect to `/login` with return URL preserved
4. Log back in
5. Should redirect back to `/dashboard` automatically

### 7. Test Multi-Device Logout

1. Login on browser 1
2. Login on browser 2 (or incognito window)
3. In browser 1, go to Dashboard
4. Click "Logout All Devices"
5. Confirm dialog
6. Browser 1 should logout
7. Browser 2 should also be logged out on next request

### 8. Verify Backend Integration

Open Browser DevTools (F12) and check:

**Network Tab** (during registration):
```
POST /api/v1/auth/register
Status: 200 OK
Response: {
  "access_token": "eyJ...",
  "refresh_token": "eyJ...",
  "token_type": "bearer",
  "expires_in": 900
}

GET /api/v1/auth/me
Status: 200 OK
Response: {
  "id": "550e8400-...",
  "email": "test@fillflow.com",
  "name": "Test User",
  "is_active": true,
  "s3_bucket_prefix": "users/550e8400-.../",
  "pinecone_namespace": "user_550e8400..."
}
```

**Cookies Tab** (Application > Cookies):
```
access_token (HttpOnly, Secure, SameSite=lax)
refresh_token (HttpOnly, Secure, SameSite=lax)
```

**Console Tab**:
```
Should see no errors
Access tokens in localStorage for backup
```

**Application → Local Storage**:
```
access_token: "eyJ..."
refresh_token: "eyJ..."
```

## Troubleshooting

### Issue: Cookies not being set

**Symptoms**: Logged in but immediately logged out on refresh

**Solutions**:
1. Check backend CORS settings allow credentials:
   ```python
   app.add_middleware(
       CORSMiddleware,
       allow_origins=["http://localhost:5173"],
       allow_credentials=True,  # MUST BE TRUE
       allow_methods=["*"],
       allow_headers=["*"],
   )
   ```

2. Check fetch includes credentials:
   ```typescript
   fetch(url, {
     credentials: 'include'  // MUST BE PRESENT
   })
   ```

3. Development: Set `COOKIE_SECURE=false` in backend
   ```env
   COOKIE_SECURE=false  # For HTTP in development
   ```

### Issue: 401 Unauthorized on all requests

**Solutions**:
1. Clear localStorage:
   ```javascript
   localStorage.clear()
   ```

2. Clear cookies (DevTools > Application > Cookies > Clear All)

3. Login again

### Issue: "Failed to fetch" or CORS errors

**Solutions**:
1. Verify backend is running: `http://localhost:8000/docs`
2. Check VITE_API_URL in `.env`
3. Verify CORS origins in backend include your frontend URL

### Issue: Token refresh not working

**Solutions**:
1. Check refresh token is valid:
   ```javascript
   localStorage.getItem('refresh_token')
   ```

2. Check backend JWT_REFRESH_TOKEN_EXPIRE_DAYS setting

3. Try manual refresh:
   ```bash
   curl -X POST http://localhost:8000/api/v1/auth/refresh \
     -H "Content-Type: application/json" \
     -d '{"refresh_token":"YOUR_TOKEN"}'
   ```

## API Testing with cURL

### Register
```bash
curl -X POST http://localhost:8000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@fillflow.com",
    "password": "TestPass123!",
    "name": "Test User"
  }'
```

### Login
```bash
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -c cookies.txt \
  -d '{
    "email": "test@fillflow.com",
    "password": "TestPass123!"
  }'
```

### Get User Info
```bash
curl -X GET http://localhost:8000/api/v1/auth/me \
  -b cookies.txt
```

### Refresh Token
```bash
curl -X POST http://localhost:8000/api/v1/auth/refresh \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -c cookies.txt \
  -d '{
    "refresh_token": "YOUR_REFRESH_TOKEN"
  }'
```

### Logout
```bash
curl -X POST http://localhost:8000/api/v1/auth/logout \
  -b cookies.txt
```

### Logout All Devices
```bash
curl -X POST http://localhost:8000/api/v1/auth/logout-all \
  -b cookies.txt
```

## Verify AWS Resources Created

### Check S3
```bash
aws s3 ls s3://your-bucket-name/users/
# Should show: users/{your-user-id}/
```

### Check PostgreSQL
```sql
-- Connect to database
psql -h your-db-endpoint -U admin -d fillflow

-- List users
SELECT id, email, s3_bucket_prefix, pinecone_namespace, created_at 
FROM users 
ORDER BY created_at DESC 
LIMIT 5;

-- Check refresh tokens
SELECT user_id, device_name, ip_address, created_at, expires_at, is_revoked
FROM refresh_tokens
WHERE user_id = 'YOUR_USER_ID'
ORDER BY created_at DESC;
```

### Check Pinecone
```python
from pinecone import Pinecone

pc = Pinecone(api_key="your-api-key")
index = pc.Index("fillflow-vectors")
stats = index.describe_index_stats()
print(stats.namespaces)
# Should include: user_{your_user_id}
```

## Success Checklist

After completing all tests, you should have:

- [x] Registered a new account
- [x] Logged in successfully
- [x] Viewed dashboard with user info and AWS resources
- [x] Tested session persistence across page reloads
- [x] Verified cookies are set (HttpOnly, Secure)
- [x] Tested protected route redirects
- [x] Confirmed auto-refresh token works (15 min expiry)
- [x] Tested logout (single device)
- [x] Tested logout all devices
- [x] Verified AWS resources created (S3 prefix, Pinecone namespace)
- [x] Confirmed no console errors
- [x] Session persists after browser restart (30 day refresh token)

## Common Issues

### Issue: "Failed to fetch"

**Symptom**: Can't register or login, network error in console

**Solutions**:
1. Check backend is running: `curl http://localhost:8000/health`
2. Verify `.env` has correct `VITE_API_URL`
3. Check backend CORS settings allow credentials
4. Restart both frontend and backend servers

### Issue: Cookies not being set

**Symptom**: Logged out immediately after refresh

**Solution**: 
- Backend: Set `COOKIE_SECURE=false` for HTTP (development)
- Backend: Verify CORS `allow_credentials=True`
- Frontend: All fetch calls have `credentials: 'include'`

### Issue: CORS Error

**Symptom**: "Access to fetch... has been blocked by CORS policy"

**Solution**: Backend `.env`:
```env
CORS_ORIGINS=http://localhost:5173,http://localhost:3000
```

### Issue: "User already exists"

**Symptom**: Can't register with same email twice

**Solution**: 
- Use different email for testing
- Or delete user from database
- This is expected security behavior

### Issue: 401 on all requests

**Symptom**: Every API call returns 401 Unauthorized

**Solutions**:
1. Clear localStorage: `localStorage.clear()`
2. Clear cookies (DevTools > Application > Cookies > Clear)
3. Login again
4. Check backend JWT_SECRET_KEY is set

### Issue: Token refresh not working

**Symptom**: Logged out after 15 minutes

**Solutions**:
1. Check refresh token in localStorage exists
2. Verify backend JWT_REFRESH_TOKEN_EXPIRE_DAYS is set
3. Check `refresh_tokens` table has entry
4. Test manual refresh with cURL

## Next Steps

Now that authentication is working:

1. **Build Protected Features**: Use `useAuth()` hook and `apiClient` for new features
2. **Document Upload**: Build upload UI using authenticated endpoints
3. **Session Management**: Add UI to view/revoke active sessions
4. **Chrome Extension**: Integrate auth between web and extension
5. **Deploy**: Push to production with HTTPS and secure cookies

## Additional Resources

- [Implementation Guide](./AUTHENTICATION_IMPLEMENTATION.md) - Full technical documentation
- [API Specification](./FILLFLOW_LOGIN_SYSTEM.md) - Complete API reference
- [Backend Checklist](./BACKEND_CHECKLIST.md) - Backend setup guide

## Support

For questions or issues:

- **GitHub**: https://github.com/fillflow/fillflow-website/issues
- **Email**: dev@fillflow.com
- **Docs**: https://docs.fillflow.com

---

**Testing Complete!** ✅

You now have:
✅ Cookie-based secure authentication  
✅ 15-minute auto-refresh tokens  
✅ 30-day persistent login  
✅ Multi-device session support  
✅ AWS resource isolation per user  
✅ Protected routes with auto-redirect  

Happy coding! 🚀
