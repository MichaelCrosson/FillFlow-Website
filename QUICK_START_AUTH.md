# Quick Start Guide - Testing Authentication

## Prerequisites

Before testing authentication, ensure:

1. ✅ Backend API is running on `http://localhost:8000`
2. ✅ S3 bucket `fillgenie-documents` exists
3. ✅ Pinecone index `fillgenie-chunks-v2` exists (3072 dimensions)
4. ✅ PostgreSQL database is accessible
5. ✅ Backend CORS allows `http://localhost:5173`

## Step-by-Step Testing

### 1. Start the Development Server

```bash
cd fillgenie-site
npm install  # If not already done
npm run dev
```

Website will be available at `http://localhost:5173`

### 2. Test User Registration

1. Navigate to `http://localhost:5173/login`
2. Click "Sign up" to switch to registration mode
3. Fill in the form:
   - **Email**: `test@fillgenie.com`
   - **Password**: `TestPass123!`
   - **Full Name**: `Test User` (optional)
4. Click "Create Account"

**Expected Result**:
- Redirected to home page
- Header shows "My Dashboard" button instead of "Login"
- Browser console shows successful registration
- localStorage has `authToken` and `authUser`

### 3. View Dashboard

1. Click "My Dashboard" in the header
2. Should see welcome message with your name
3. Account info card shows:
   - Email address
   - User ID (UUID)
   - S3 bucket prefix
   - Pinecone namespace

### 4. Test Session Persistence

1. Refresh the page (F5)
2. Header should still show "My Dashboard"
3. You should still be logged in
4. Open new tab → Navigate to site → Should still be logged in

### 5. Test Protected Routes

1. Click logout icon in header
2. Try to access `/dashboard` directly
3. Should redirect to `/login`
4. Log back in
5. Should redirect back to `/dashboard`

### 6. Verify Backend Integration

Open Browser DevTools (F12) and check:

**Network Tab**:
```
POST /api/v1/auth/register
Status: 200 OK
Response: {
  "access_token": "eyJ...",
  "user": {
    "id": "abc-123-...",
    "email": "test@fillgenie.com",
    "s3_bucket_prefix": "users/abc-123-.../",
    "pinecone_namespace": "user_abc123..."
  }
}
```

**Console Tab**:
```
Should see no errors
```

**Application → Local Storage**:
```
authToken: "eyJ..."
authUser: "{...json user object...}"
```

### 7. Verify AWS Resources Created

**Check S3**:
```bash
aws s3 ls s3://fillgenie-documents/users/
# Should show: users/{your-user-id}/
```

**Check PostgreSQL**:
```sql
-- Connect to database
psql -h your-rds-endpoint -U fillgenie_admin -d fillgenie

-- List schemas
\dn
-- Should show: user_{your_user_id_no_dashes}

-- Check tables
\dt user_{your_user_id_no_dashes}.*
-- Should show: documents, chunks, entities, form_sessions, etc.
```

**Check Pinecone**:
```python
from pinecone import Pinecone
pc = Pinecone(api_key="your-key")
index = pc.Index("fillgenie-chunks-v2")
stats = index.describe_index_stats()
print(stats['namespaces'])
# Namespace exists (initially empty until documents uploaded)
```

## Common Issues

### Issue: "Failed to fetch"

**Symptom**: Can't register or login, network error in console

**Solutions**:
1. Check backend is running: `curl http://localhost:8000/health`
2. Verify `.env` has `VITE_API_URL=http://localhost:8000`
3. Check backend CORS settings allow `http://localhost:5173`
4. Restart both frontend and backend servers

### Issue: CORS Error

**Symptom**: "Access to fetch... has been blocked by CORS policy"

**Solution**: Add to backend `.env`:
```bash
CORS_ORIGINS=["http://localhost:5173", "http://localhost:3000"]
```

### Issue: "User already exists"

**Symptom**: Can't register with same email twice

**Solution**: 
- Use different email
- Or delete user from database first
- This is expected behavior

### Issue: Token Expired

**Symptom**: Suddenly logged out or 401 errors

**Solution**:
- JWT tokens expire after 15 minutes (default)
- Log in again to get new token
- Future: Implement refresh token flow

### Issue: Header Doesn't Update

**Symptom**: Still shows "Login" after successful login

**Solutions**:
1. Check browser console for errors
2. Verify `AuthProvider` wraps app in `App.tsx`
3. Clear localStorage and try again
4. Check React DevTools for AuthContext state

## Testing Checklist

- [ ] Backend API responds to `/health` endpoint
- [ ] Can register new user
- [ ] Receives JWT token
- [ ] Token stored in localStorage
- [ ] Header shows "My Dashboard"
- [ ] Can access `/dashboard` page
- [ ] Dashboard shows correct user info
- [ ] Session persists after page reload
- [ ] Logout clears session
- [ ] Redirect to login for protected routes
- [ ] Can log back in with same credentials
- [ ] S3 prefix created in AWS
- [ ] PostgreSQL schema created
- [ ] Pinecone namespace ready

## Next Steps After Testing

1. **Deploy Backend**: Set up production API endpoint
2. **Update Environment**: Change `VITE_API_URL` to production URL
3. **Deploy Frontend**: Push to Vercel with environment variable
4. **Test Production**: Verify cross-origin requests work
5. **Setup SSL**: Ensure HTTPS on both frontend and backend

## Support

If you encounter issues:

1. Check `AUTHENTICATION_SETUP.md` for detailed documentation
2. Review `AWS_USER_RESOURCES_GUIDE.md` for backend setup
3. Inspect browser console and network tab
4. Check backend logs for errors
5. Email: fillgenie@gmail.com

---

**Ready to test!** Follow the steps above to verify everything works.
