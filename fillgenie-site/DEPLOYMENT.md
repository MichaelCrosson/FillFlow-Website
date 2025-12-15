# FillGenie Website - Deployment Guide

## Prerequisites

1. GitHub account
2. Vercel account (sign up at vercel.com)
3. Domain: fill-genie.com (registered on AWS)

## Step 1: Push to GitHub

```bash
cd "c:\Users\nosso\OneDrive\Desktop\FillGenie Website\fillgenie-site"

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: FillGenie marketing website"

# Create repository on GitHub
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/fillgenie-website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Step 3: Configure Custom Domain

### In Vercel Dashboard:

1. Go to Project Settings → Domains
2. Add domain: `fill-genie.com`
3. Add domain: `www.fill-genie.com` (redirect to primary)
4. Follow DNS configuration instructions

### DNS Configuration (AWS Route 53):

For `fill-genie.com`:
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP - check Vercel dashboard for current IP)
```

For `www.fill-genie.com`:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Step 4: Environment Variables (Optional)

In Vercel Dashboard → Project Settings → Environment Variables:

```
VITE_API_URL=https://api.fill-genie.com/api/v1
VITE_CHROME_STORE_URL=https://chrome.google.com/webstore/detail/fillgenie/YOUR_ID
VITE_DASHBOARD_URL=https://dashboard.fill-genie.com
```

## Step 5: Verify Deployment

1. Visit https://fill-genie.com
2. Check all pages load:
   - Home: /
   - Pricing: /pricing
   - Coming Soon: /coming-soon
3. Test mobile responsiveness
4. Verify all links work
5. Check SEO meta tags (View Source)

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch → Production deployment
- Every push to other branches → Preview deployment
- Pull requests → Preview deployment with unique URL

## Monitoring

### Vercel Analytics
- Enable in Project Settings → Analytics
- Track page views, performance, user behavior

### Build Logs
- View in Vercel Dashboard → Deployments → [Deployment] → Build Logs

## Rollback

If deployment has issues:
1. Go to Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "Promote to Production"

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Image optimization
- ✅ Automatic HTTPS
- ✅ Gzip/Brotli compression
- ✅ HTTP/2 support

## Troubleshooting

### Build Fails

Check build logs for errors. Common issues:
- Missing dependencies: Run `npm install` locally
- TypeScript errors: Run `npm run build` locally to test
- Import errors: Check file paths are correct

### Domain Not Working

- Wait 24-48 hours for DNS propagation
- Verify DNS records in AWS Route 53
- Check Vercel domain status

### 404 Errors

- Ensure `vercel.json` has rewrite rules for SPA routing
- Clear browser cache

## Post-Deployment Checklist

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Mobile menu functions properly
- [ ] Forms display correctly (Coming Soon page)
- [ ] Images load (PhilGenie.png logo)
- [ ] Colors match design (warm sand, sunlit amber, etc.)
- [ ] Animations work smoothly
- [ ] SEO meta tags present
- [ ] No console errors in browser
- [ ] SSL certificate active (https://)

## Next Updates

To update the site:
1. Make changes locally
2. Test with `npm run dev`
3. Commit: `git commit -am "Description of changes"`
4. Push: `git push`
5. Vercel automatically deploys

## Support

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: support@vercel.com
- FillGenie Team: hello@fillgenie.com

---

**Estimated Deployment Time:** 10-15 minutes
**DNS Propagation Time:** Up to 48 hours
