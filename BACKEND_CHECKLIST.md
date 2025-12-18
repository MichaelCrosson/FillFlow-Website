# Backend Environment Setup Checklist

Before the website authentication will work, verify these backend requirements are met:

## ✅ Required AWS Resources

### 1. S3 Bucket
```bash
# Check if bucket exists
aws s3 ls s3://fillgenie-documents

# If not, create it
aws s3 mb s3://fillgenie-documents --region us-east-1

# Enable encryption
aws s3api put-bucket-encryption \
  --bucket fillgenie-documents \
  --server-side-encryption-configuration '{
    "Rules": [{
      "ApplyServerSideEncryptionByDefault": {
        "SSEAlgorithm": "AES256"
      }
    }]
  }'
```

**Status**: [ ] Complete

### 2. Pinecone Index
```python
from pinecone import Pinecone, ServerlessSpec

pc = Pinecone(api_key="your-api-key")

# Check if index exists
indexes = pc.list_indexes()
print(indexes)

# If not, create it
pc.create_index(
    name="fillgenie-chunks-v2",
    dimension=3072,  # OpenAI text-embedding-3-large
    metric="cosine",
    spec=ServerlessSpec(
        cloud="aws",
        region="us-east-1"
    )
)
```

**Status**: [ ] Complete

### 3. PostgreSQL Database
```sql
-- Check user permissions
SELECT * FROM pg_roles WHERE rolname = 'fillgenie_admin';

-- Grant schema creation permission
GRANT CREATE ON DATABASE fillgenie TO fillgenie_admin;

-- Test schema creation
CREATE SCHEMA IF NOT EXISTS test_user_schema;
DROP SCHEMA test_user_schema;
```

**Status**: [ ] Complete

## ✅ Backend Environment Variables

Create `.env` file in your backend API directory:

```bash
# Database
DATABASE_URL=postgresql://user:pass@host:5432/fillgenie
DATABASE_HOST=your-rds-endpoint.rds.amazonaws.com
DATABASE_PORT=5432
DATABASE_NAME=fillgenie
DATABASE_USER=fillgenie_admin
DATABASE_PASSWORD=your-secure-password

# AWS Credentials
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key

# S3 Document Storage
S3_BUCKET=fillgenie-documents

# Pinecone Vector Database
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_ENVIRONMENT=us-west1-gcp
PINECONE_INDEX_NAME=fillgenie-chunks-v2

# OpenAI for Embeddings
OPENAI_API_KEY=your-openai-api-key
OPENAI_EMBEDDING_MODEL=text-embedding-3-large

# JWT Authentication
JWT_SECRET_KEY=your-secret-key-at-least-32-characters-long
JWT_ALGORITHM=HS256
JWT_ACCESS_TOKEN_EXPIRE_MINUTES=15

# CORS (add your website domains)
CORS_ORIGINS=["http://localhost:5173", "http://localhost:3000", "https://fillgenie.com", "https://www.fillgenie.com"]
```

**Status**: [ ] Complete

## ✅ Backend API Endpoints

Verify these endpoints are implemented and working:

### Health Check
```bash
curl http://localhost:8000/health
# Expected: {"status": "healthy"}
```
**Status**: [ ] Working

### Register
```bash
curl -X POST http://localhost:8000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPass123!",
    "full_name": "Test User"
  }'
```

**Expected Response**:
```json
{
  "access_token": "eyJ...",
  "token_type": "bearer",
  "expires_in": 900,
  "user": {
    "id": "uuid",
    "email": "test@example.com",
    "full_name": "Test User",
    "s3_bucket_prefix": "users/{uuid}/",
    "pinecone_namespace": "user_{uuid}"
  }
}
```
**Status**: [ ] Working

### Login
```bash
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPass123!"
  }'
```

**Expected Response**: Same as register
**Status**: [ ] Working

## ✅ IAM Permissions

Ensure your AWS IAM user/role has these permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::fillgenie-documents",
        "arn:aws:s3:::fillgenie-documents/*"
      ]
    }
  ]
}
```

**Status**: [ ] Complete

## ✅ CORS Configuration

Backend must allow requests from frontend origin:

**FastAPI Example** (`main.py`):
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite dev server
        "http://localhost:3000",  # Alternative port
        "https://fillgenie.com",  # Production
        "https://www.fillgenie.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**Status**: [ ] Complete

## ✅ Database Schema

Ensure `users` table exists in public schema:

```sql
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    
    -- AWS Resources
    s3_bucket_prefix VARCHAR(255) UNIQUE NOT NULL,
    pinecone_namespace VARCHAR(255) UNIQUE NOT NULL,
    db_schema VARCHAR(255) UNIQUE,
    
    -- Status
    is_active BOOLEAN DEFAULT TRUE,
    is_verified BOOLEAN DEFAULT FALSE,
    email_verified_at TIMESTAMP,
    
    -- Usage Stats
    total_documents INTEGER DEFAULT 0,
    total_storage_bytes INTEGER DEFAULT 0,
    total_vectors INTEGER DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

**Status**: [ ] Complete

## ✅ Testing Backend

1. **Start Backend Server**:
```bash
cd fillgenie-api
uvicorn main:app --reload --port 8000
```
**Status**: [ ] Running

2. **Test Registration**:
```bash
curl -X POST http://localhost:8000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123!","full_name":"Test"}'
```
**Status**: [ ] Success

3. **Verify S3 Prefix Created**:
```bash
aws s3 ls s3://fillgenie-documents/users/
```
**Status**: [ ] Verified

4. **Verify DB Schema Created**:
```sql
\dn
-- Should show user_{uuid} schema
```
**Status**: [ ] Verified

## 📋 Final Checklist

Before connecting the website:

- [ ] S3 bucket exists and is accessible
- [ ] Pinecone index exists (3072 dimensions, cosine metric)
- [ ] PostgreSQL user has CREATE SCHEMA permission
- [ ] All backend environment variables set
- [ ] Backend server running on port 8000
- [ ] Health endpoint responds successfully
- [ ] Registration endpoint creates user and AWS resources
- [ ] Login endpoint returns JWT token
- [ ] CORS configured to allow frontend origin
- [ ] IAM permissions configured correctly

## 🚀 Ready to Connect Website

Once all items are checked:

1. Update frontend `.env`:
```bash
VITE_API_URL=http://localhost:8000
```

2. Start frontend:
```bash
cd fillgenie-site
npm run dev
```

3. Test registration at `http://localhost:5173/login`

4. Verify AWS resources created for new user

---

**Questions?** See `AWS_USER_RESOURCES_GUIDE.md` for detailed backend setup.
