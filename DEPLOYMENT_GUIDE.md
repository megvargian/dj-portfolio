# Deploying Nuxt 3 to cPanel with GitHub Actions

## Overview
This guide explains how to automatically deploy your Nuxt 3 DJ Portfolio to a cPanel hosting server using GitHub Actions.

## Deployment Strategy
Since cPanel typically doesn't support Node.js runtime for static hosting, we'll use **Static Site Generation (SSG)** to build your Nuxt app into static HTML/CSS/JS files that can be served by any web server.

---

## Step 1: Configure Nuxt for Static Generation

Your `nuxt.config.ts` is already configured correctly for static deployment. The `nuxt generate` command will create a static version in the `.output/public` folder (or `dist` folder depending on configuration).

### Update package.json scripts (already done):
```json
{
  "scripts": {
    "generate": "nuxt generate"
  }
}
```

---

## Step 2: Set Up cPanel FTP Access

### Get your cPanel FTP credentials:

1. **Log into your cPanel account**
2. Go to **"FTP Accounts"** section
3. Either use your main cPanel account or create a new FTP account
4. Note down:
   - **FTP Server**: Usually `ftp.yourdomain.com` or your server IP
   - **FTP Username**: Your cPanel username or FTP account username
   - **FTP Password**: Your cPanel password or FTP account password
   - **Remote Directory**: Usually `/public_html` or `/public_html/subdomain` if using a subdomain

### Important Directory Paths:
- **Main domain**: `/public_html/`
- **Subdomain**: `/public_html/subdomain-name/`
- **Addon domain**: `/public_html/addon-domain.com/`

---

## Step 3: Configure GitHub Secrets

Go to your GitHub repository and add these secrets:

1. Navigate to: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

2. Add the following secrets:

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `FTP_SERVER` | Your FTP server address | `ftp.djronn.com` |
| `FTP_USERNAME` | Your FTP username | `djronn@djronn.com` |
| `FTP_PASSWORD` | Your FTP password | `your-secure-password` |
| `FTP_SERVER_DIR` | Remote directory path | `/public_html/` |

### How to add secrets:
```
Settings → Secrets and variables → Actions → New repository secret
```

---

## Step 4: Understanding the GitHub Actions Workflow

The workflow file `.github/workflows/deploy.yml` does the following:

### Workflow Breakdown:

```yaml
on:
  push:
    branches:
      - main  # Auto-deploys when you push to main branch
  workflow_dispatch:  # Allows manual deployment from GitHub UI
```

### Build Process:
1. **Checkout code**: Downloads your repository
2. **Setup Node.js**: Installs Node.js 18
3. **Install dependencies**: Runs `npm ci` (clean install)
4. **Build static site**: Runs `npm run generate` → creates `.output/public/` folder
5. **Deploy via FTP**: Uploads files to cPanel

---

## Step 5: Update Nuxt Config for Static Generation

Add this to your `nuxt.config.ts` to ensure proper static generation:

```typescript
export default defineNuxtConfig({
  ssr: false,  // Generate as SPA for better cPanel compatibility

  // OR for SSG (Static Site Generation):
  ssr: true,

  nitro: {
    preset: 'static'  // Ensures static output
  },

  // Rest of your config...
})
```

---

## Step 6: Deploy Your Site

### Option A: Automatic Deployment (Recommended)
1. Commit your changes:
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push origin main
   ```
2. GitHub Actions will automatically build and deploy

### Option B: Manual Deployment
1. Go to GitHub repository
2. Click **Actions** tab
3. Select **Deploy to cPanel** workflow
4. Click **Run workflow** button

---

## Step 7: Verify Deployment

After deployment completes:

1. **Check GitHub Actions**:
   - Go to **Actions** tab in your repository
   - Click on the latest workflow run
   - Verify all steps completed successfully (green checkmarks)

2. **Check cPanel File Manager**:
   - Log into cPanel
   - Open **File Manager**
   - Navigate to `/public_html/` (or your deployment directory)
   - Verify files are present: `index.html`, `_nuxt/`, `assets/`, etc.

3. **Test your website**:
   - Visit your domain (e.g., `https://djronn.com`)
   - Check if site loads correctly
   - Test all pages and features

---

## Troubleshooting

### Issue: Files not showing in cPanel
**Solution**:
- Verify `FTP_SERVER_DIR` secret ends with `/` (e.g., `/public_html/`)
- Check FTP credentials are correct
- Ensure FTP account has write permissions

### Issue: 404 errors on routes
**Solution**: Add `.htaccess` file to handle SPA routing:

Create `.htaccess` in your public folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Issue: Build fails in GitHub Actions
**Solution**:
- Check the Actions logs for error details
- Ensure `package.json` dependencies are correct
- Test build locally first: `npm run generate`

### Issue: Slow deployment
**Solution**:
- Large files may take time to upload via FTP
- Consider excluding unnecessary files in the workflow
- Use `.gitignore` to avoid uploading development files

---

## Additional Optimization

### 1. Add .htaccess for Performance
Create `public/.htaccess`:
```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# SPA Routing
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### 2. Environment Variables
If you need environment variables, add them to GitHub Secrets:
```yaml
- name: Build Nuxt app
  env:
    NUXT_PUBLIC_API_URL: ${{ secrets.API_URL }}
  run: npm run generate
```

---

## Cost & Performance

### Pros of cPanel Deployment:
✅ No server maintenance needed
✅ Works with any shared hosting
✅ Automatic SSL via cPanel
✅ Cost-effective for small projects

### Cons:
❌ No server-side rendering (SSR) on cPanel
❌ FTP uploads can be slow
❌ No automatic scaling

---

## Alternative: Using rsync (Faster)

For faster deployments, you can use rsync instead of FTP:

```yaml
- name: Deploy via SSH
  uses: easingthemes/ssh-deploy@main
  env:
    SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
    REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
    REMOTE_USER: ${{ secrets.REMOTE_USER }}
    TARGET: ${{ secrets.REMOTE_TARGET }}
    SOURCE: ".output/public/"
```

Ask your hosting provider if SSH access is available.

---

## Summary

1. ✅ Configure Nuxt for static generation
2. ✅ Get cPanel FTP credentials
3. ✅ Add GitHub Secrets (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD, FTP_SERVER_DIR)
4. ✅ Push code to GitHub → Auto-deployment begins
5. ✅ Verify deployment in cPanel and test live site

**Your workflow is now set up!** Every time you push to `main`, your site will automatically build and deploy to cPanel.
