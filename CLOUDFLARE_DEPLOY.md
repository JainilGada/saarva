# Cloudflare Pages Deployment - Quick Reference

## Framework Information

- **Framework:** Next.js 14.2.5
- **Build System:** Next.js (App Router)
- **Package Manager:** npm
- **Project Structure:** Monorepo (app in `/apps/home`)

## Cloudflare Pages Settings

When setting up your project in Cloudflare Pages dashboard, use these exact values:

### Build Configuration

| Setting | Value |
|---------|-------|
| **Framework preset** | `Next.js` |
| **Build command** | `cd apps/home && npm install && npm run build` |
| **Build output directory** | `apps/home/.next` |
| **Root directory** | `/` (leave empty or `/`) |
| **Node.js version** | `18` or `20` |

### Environment Variables (Optional)

Only if you need to override the Google Form URL:

- **Variable:** `NEXT_PUBLIC_GOOGLE_FORM_URL`
- **Value:** `https://forms.gle/g8W7oKfqNR5kBS1A9` (or your custom URL)

## Step-by-Step

1. **Go to Cloudflare Dashboard** → Pages → Create a project
2. **Connect your Git repository** (GitHub/GitLab/Bitbucket)
3. **Configure build settings** (use values above)
4. **Deploy!**

That's it! Cloudflare will automatically:
- Detect Next.js
- Install dependencies
- Build your app
- Deploy to edge network

## Custom Domain

After deployment:
1. Go to project → **Custom domains**
2. Add `saarva.xyz` (or your domain)
3. Follow DNS setup instructions

## Notes

- ✅ No additional configuration needed - Cloudflare has native Next.js support
- ✅ Your monorepo structure is handled by the build command
- ✅ All dependencies are in `apps/home/package.json`
- ✅ Static assets and pages will be automatically optimized

