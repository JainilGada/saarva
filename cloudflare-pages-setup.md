# Cloudflare Pages Deployment Guide

## Framework Details

- **Framework:** Next.js 14.2.5 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Next.js built-in

## Cloudflare Pages Configuration

### Option 1: Using Cloudflare's Next.js Runtime (Recommended)

Cloudflare Pages now has native Next.js support. Here's what you need:

#### Build Settings in Cloudflare Dashboard:

1. **Framework preset:** `Next.js`
2. **Build command:** `cd apps/home && npm install && npm run build`
3. **Build output directory:** `apps/home/.next`
4. **Root directory:** `/` (root of your repo)
5. **Node version:** `18` or `20`

#### Environment Variables (if needed):
- `NEXT_PUBLIC_GOOGLE_FORM_URL` (if you want to override the form URL)

### Option 2: Using @cloudflare/next-on-pages

If native support doesn't work, use the Cloudflare adapter:

1. Install the adapter:
```bash
cd apps/home
npm install --save-dev @cloudflare/next-on-pages
```

2. Update `next.config.js`:
```javascript
const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === 'development') {
  setupDevPlatform();
}

module.exports = nextConfig;
```

3. Update `package.json` build script:
```json
"build": "next build && npx @cloudflare/next-on-pages"
```

4. Build settings:
   - **Build command:** `cd apps/home && npm install && npm run build`
   - **Build output directory:** `apps/home/.vercel/output/static`
   - **Root directory:** `/`

## Step-by-Step Deployment

### 1. Connect Repository

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Connect your Git repository (GitHub/GitLab/Bitbucket)
4. Select your repository

### 2. Configure Build Settings

**Framework preset:** `Next.js`

**Build settings:**
- **Build command:** 
  ```
  cd apps/home && npm install && npm run build
  ```
- **Build output directory:** 
  ```
  apps/home/.next
  ```
- **Root directory:** 
  ```
  / (leave empty or use `/`)
  ```

### 3. Environment Variables (Optional)

If you need to override the Google Form URL:
- **Variable name:** `NEXT_PUBLIC_GOOGLE_FORM_URL`
- **Value:** Your Google Form URL

### 4. Deploy

Click **Save and Deploy**. Cloudflare will:
1. Install dependencies
2. Build your Next.js app
3. Deploy to Cloudflare's edge network

## Important Notes

### Monorepo Structure

Since you're using a monorepo:
- Make sure Cloudflare can access the `apps/home` directory
- The build command includes `cd apps/home` to navigate to the app
- All dependencies should be in `apps/home/package.json`

### Build Output

For Next.js on Cloudflare Pages:
- Native Next.js support uses `.next` directory
- If using adapter, output goes to `.vercel/output/static`

### Custom Domain

After deployment:
1. Go to your project settings
2. Click **Custom domains**
3. Add your domain (e.g., `saarva.xyz`)
4. Update DNS records as instructed

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18 or 20)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### 404 Errors

- Ensure `next.config.js` is properly configured
- Check that static files are being generated
- Verify output directory is correct

### Environment Variables Not Working

- Make sure variables start with `NEXT_PUBLIC_` for client-side access
- Rebuild after adding new variables

## Quick Reference

| Setting | Value |
|---------|-------|
| Framework | Next.js |
| Build Command | `cd apps/home && npm install && npm run build` |
| Output Directory | `apps/home/.next` |
| Node Version | 18 or 20 |
| Root Directory | `/` |

