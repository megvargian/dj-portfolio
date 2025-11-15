# Deploy to cPanel - Git Methods

Choose the deployment method that works best for your cPanel setup.

---

## 🎯 Choose Your Method

| Method | Best For | Difficulty | Requirements |
|--------|----------|------------|--------------|
| **Method 1: SSH + rsync** | Most reliable, fastest | Easy | SSH access only |
| **Method 2: cPanel Git UI** | Visual interface | Medium | Git Version Control feature |

**Recommendation**: Try **Method 1** first - it's simpler and works on most cPanel hosts.

---

# METHOD 1: SSH + rsync Deployment (RECOMMENDED)

This method is **simpler and works on most cPanel hosts**. You only need SSH access.

## Step 1: Check if You Have SSH Access

1. **Log into cPanel**
2. Search for **"SSH Access"** or **"Terminal"**
3. If you see it, you're good! ✅
4. If not, contact your hosting provider to enable SSH

**Note your SSH details:**
- Host: Usually `yourdomain.com` or `server123.hostingprovider.com`
- Port: Usually `22` (sometimes `2222`)
- Username: Your cPanel username
- Password: Your cPanel password

---

## Step 2: Generate SSH Key (More Secure Than Password)

### On Windows (PowerShell or Git Bash):
```bash
ssh-keygen -t ed25519 -C "cpanel-deploy"
```

**When prompted:**
- Save location: Press Enter (default)
- Passphrase: Leave empty (press Enter twice)

**This creates:**
- `~/.ssh/id_ed25519` (private key - keep secret!)
- `~/.ssh/id_ed25519.pub` (public key - safe to share)

### On Mac/Linux (Terminal):
```bash
ssh-keygen -t ed25519 -C "cpanel-deploy"
```

---

## Step 3: Add Public Key to cPanel

1. **Open your public key:**
   ```bash
   # Windows
   notepad ~/.ssh/id_ed25519.pub

   # Mac/Linux
   cat ~/.ssh/id_ed25519.pub
   ```

2. **Copy the entire content** (starts with `ssh-ed25519...`)

3. **In cPanel:**
   - Go to **"SSH Access"**
   - Click **"Manage SSH Keys"**
   - Click **"Import Key"**
   - Paste public key
   - Click **"Import"**
   - Find your key in the list and click **"Authorize"**

---

## Step 4: Test SSH Connection

```bash
ssh your-cpanel-username@yourdomain.com -p 22
```

If successful, you'll see cPanel terminal! Type `exit` to logout.

**If it asks for password:**
- SSH key might not be set up correctly
- You can still use password in Step 5

---

## Step 5: Add GitHub Secrets

**GitHub Repo → Settings → Secrets and variables → Actions → New repository secret**

Add these secrets:

| Secret Name | Value | Example |
|------------|-------|---------|
| `CPANEL_HOST` | Your server hostname | `yourdomain.com` |
| `CPANEL_USERNAME` | Your cPanel username | `cpaneluser` |
| `CPANEL_SSH_KEY` | Your private key | Copy from `~/.ssh/id_ed25519` |
| `CPANEL_SSH_PORT` | SSH port | `22` |
| `CPANEL_PUBLIC_PATH` | Full path to public_html | `/home/cpaneluser/public_html` |

### How to get CPANEL_PUBLIC_PATH:
1. SSH into your server: `ssh username@yourdomain.com`
2. Run: `pwd` then `cd public_html` then `pwd`
3. Copy the full path (e.g., `/home/cpaneluser/public_html`)

### How to copy private key:
```bash
# Windows
notepad ~/.ssh/id_ed25519

# Mac/Linux
cat ~/.ssh/id_ed25519
```

Copy **everything** including:
```
-----BEGIN OPENSSH PRIVATE KEY-----
...entire key...
-----END OPENSSH PRIVATE KEY-----
```

---

## Step 6: Use the Deployment Workflow

Create `.github/workflows/deploy-ssh.yml`:

```yaml
name: Deploy to cPanel via SSH

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install and Build
        run: |
          rm -rf node_modules package-lock.json
          npm install
          npm run generate

      - name: Deploy via rsync over SSH
        uses: burnett01/rsync-deployments@6.0.0
        with:
          switches: -avzr --delete
          path: .output/public/
          remote_path: ${{ secrets.CPANEL_PUBLIC_PATH }}/
          remote_host: ${{ secrets.CPANEL_HOST }}
          remote_user: ${{ secrets.CPANEL_USERNAME }}
          remote_key: ${{ secrets.CPANEL_SSH_KEY }}
          remote_port: ${{ secrets.CPANEL_SSH_PORT }}
```

---

## Step 7: Deploy!

```bash
git add .
git commit -m "Add SSH deployment"
git push origin main
```

Watch the deployment in **Actions** tab on GitHub! 🚀

---

## Alternative: Use Password Instead of SSH Key

If you prefer using password (less secure):

**In Step 5, replace:**
- ❌ Remove: `CPANEL_SSH_KEY`
- ✅ Add: `CPANEL_PASSWORD` with your cPanel password

**In Step 6, update workflow:**
```yaml
      - name: Deploy via rsync
        run: |
          sudo apt-get install -y sshpass
          sshpass -p "${{ secrets.CPANEL_PASSWORD }}" rsync -avzr --delete -e "ssh -p ${{ secrets.CPANEL_SSH_PORT }} -o StrictHostKeyChecking=no" .output/public/ ${{ secrets.CPANEL_USERNAME }}@${{ secrets.CPANEL_HOST }}:${{ secrets.CPANEL_PUBLIC_PATH }}/
```

---

# METHOD 2: cPanel Git Version Control UI

This method uses cPanel's built-in Git interface. **Only use if your cPanel has "Git Version Control" feature.**

## Step 1: Check for Git Version Control

1. **Log into cPanel**
2. Search for **"Git Version Control"** or **"Git™ Version Control"**
3. If you don't see it, **use Method 1 instead**

---

## Step 2: Set Up Git Repository in cPanel

1. **In cPanel, go to**: "Git Version Control"
2. **Click**: "Create" or "Clone"
3. **Fill in the form**:
   - **Clone URL**: `https://github.com/megvargian/dj-portfolio.git`
   - **Repository Path**: `/home/yourusername/repositories/dj-portfolio`
   - **Repository Name**: `dj-portfolio`
4. **Click**: "Create"

---

## Step 3: Configure GitHub Personal Access Token

You need a GitHub token for cPanel to access your private repo.

1. **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. **Click**: "Generate new token (classic)"
3. **Settings**:
   - Note: `cpanel-deployment`
   - Expiration: `No expiration` (or 1 year)
   - Scopes: ✅ Check `repo` (full control)
4. **Click**: "Generate token"
5. **Copy the token** (you won't see it again!)

---

## Step 4: Add Deploy Key to cPanel Repository

1. **In cPanel Git Version Control:**
   - Click **"Manage"** on your repository
   - Go to **"Pull or Deploy"** tab
   - Find **"Update from Remote"** section

2. **Set up authentication** (if using private repo):
   - You may need to update the clone URL to include token:
   ```
   https://YOUR_GITHUB_TOKEN@github.com/megvargian/dj-portfolio.git
   ```

---

## Step 5: Create Deployment Script

1. **Open cPanel Terminal** or SSH into your server

2. **Navigate to your repository**:
   ```bash
   cd ~/repositories/dj-portfolio
   ```

3. **Create deployment script**:
   ```bash
   cat > .cpanel.yml << 'EOF'
   ---
   deployment:
     tasks:
       - export DEPLOYPATH=/home/$(whoami)/public_html
       - /bin/bash deploy.sh
   EOF
   ```

4. **Create the actual deploy script**:
   ```bash
   cat > deploy.sh << 'EOF'
   #!/bin/bash

   echo "Starting deployment..."

   # Install Node.js if not available (check with hosting provider)
   # Most cPanel doesn't have Node.js, so we'll build locally

   # Get repository and public paths
   REPO_PATH="$(pwd)"
   PUBLIC_PATH="/home/$(whoami)/public_html"

   echo "Repository: $REPO_PATH"
   echo "Public path: $PUBLIC_PATH"

   # If Node.js is available on cPanel
   if command -v npm &> /dev/null; then
       echo "Building Nuxt app..."
       npm install
       npm run generate

       # Copy files to public_html
       echo "Copying files..."
       rsync -av --delete .output/public/ $PUBLIC_PATH/
   else
       echo "Node.js not available. Please use GitHub Actions to build."
       echo "This hook will only work if you push pre-built files."
   fi

   echo "Deployment completed!"
   EOF

   chmod +x deploy.sh
   ```

5. **Commit these files**:
   ```bash
   git add .cpanel.yml deploy.sh
   git commit -m "Add cPanel deployment configuration"
   git push origin main
   ```

---

## Step 6: Pull Updates via cPanel

### Manual Method:

1. **In cPanel Git Version Control:**
   - Click **"Manage"** on your repository
   - Click **"Pull or Deploy"** tab
   - Click **"Update from Remote"** button
   - This pulls latest changes and runs deployment script

### Automatic Method (Webhook):

1. **In cPanel Git Version Control:**
   - Find the webhook URL (looks like: `https://yourdomain.com:2083/cpsess.../execute/VersionControl/deploy?...`)
   - Copy it

2. **In GitHub Repository:**
   - Go to **Settings → Webhooks → Add webhook**
   - Paste the cPanel webhook URL
   - Content type: `application/json`
   - Trigger: `Just the push event`
   - Click **"Add webhook"**

Now every push to GitHub automatically updates cPanel!

---

## Step 7: GitHub Actions to Build (Recommended)

Since cPanel usually doesn't have Node.js, build on GitHub and push built files:

**Create `.github/workflows/build-and-push.yml`:**

```yaml
name: Build and Push to GitHub

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install and Build
        run: |
          npm install
          npm run generate

      - name: Commit and Push Built Files
        run: |
          git config --global user.name "GitHub Actions"
          git config --global user.email "actions@github.com"

          # Create a deploy branch with built files
          git checkout -b deploy

          # Copy built files to root
          cp -r .output/public/* .

          # Commit
          git add -f .
          git commit -m "Deploy: Built files $(date)"

          # Force push to deploy branch
          git push -f origin deploy
```

Then in cPanel, pull from `deploy` branch instead of `main`.

---

## Step 8: Configure GitHub Secrets (For Method 2)

Only needed if using SSH to trigger cPanel git pull:

**GitHub → Settings → Secrets → Actions**, add:

| Secret Name | Value | Example |
|------------|-------|---------|
| `CPANEL_HOST` | Your domain or server IP | `yourdomain.com` |
| `CPANEL_USERNAME` | Your cPanel username | `cpaneluser` |
| `CPANEL_PASSWORD` | Your cPanel password | `your-password` |
| `CPANEL_SSH_PORT` | SSH port | `22` or `2222` |

---

# COMPARISON: Which Method Should You Choose?

| Feature | Method 1: SSH+rsync | Method 2: cPanel Git UI |
|---------|-------------------|----------------------|
| **Requirements** | SSH access only | Git Version Control feature |
| **Setup Difficulty** | ⭐⭐ Easy | ⭐⭐⭐⭐ Complex |
| **Speed** | ⚡⚡⚡ Fast | ⚡⚡ Medium |
| **Node.js needed on cPanel** | ❌ No (builds on GitHub) | ✅ Yes (or use workaround) |
| **Works on most cPanel** | ✅ Yes | ⚠️ Only if feature available |
| **Automatic deployment** | ✅ On every push | ✅ Via webhook |
| **Recommended for** | Most users | Those who want Git UI |

---

# QUICK START RECOMMENDATION

## Use Method 1 (SSH + rsync) if:
- ✅ You have SSH access
- ✅ You want simple setup
- ✅ You want fast deployments
- ✅ Your cPanel doesn't have Node.js

## Use Method 2 (cPanel Git UI) if:
- ✅ You prefer visual Git interface
- ✅ You have "Git Version Control" in cPanel
- ✅ You want to manage deployments via cPanel
- ✅ Your hosting restricts SSH usage

---

# Troubleshooting Both Methods

### Issue: SSH connection refused
**Solution:**
- Verify SSH is enabled in cPanel
- Check correct port (22 or 2222)
- Try password authentication first
- Contact hosting provider

### Issue: Permission denied
**Solution:**
- Check SSH key is properly formatted
- Ensure public key is authorized in cPanel
- Verify username is correct
- Try with password first

### Issue: Git Version Control not available
**Solution:**
- **Use Method 1 instead** (SSH + rsync)
- Contact hosting provider to enable feature
- Consider upgrading hosting plan

### Issue: Node.js not found on cPanel
**Solution:**
- **This is normal for shared hosting**
- Use Method 1 (builds on GitHub)
- Or use Method 2 with "build and push" workflow

### Issue: Deployment works but site doesn't update
**Solution:**
- Clear browser cache (Ctrl+Shift+R)
- Check correct files in public_html: `ls -la ~/public_html`
- Verify file permissions: `chmod -R 755 ~/public_html`
- Check .htaccess file is present

---

# Testing Your Deployment

After deployment, verify:

1. **Check files exist:**
   ```bash
   ssh username@yourdomain.com
   ls -la ~/public_html
   # Should see: index.html, _nuxt/, assets/, etc.
   ```

2. **Test website:**
   - Visit: `https://yourdomain.com`
   - Clear cache: Ctrl+Shift+R
   - Check all pages work

3. **Check GitHub Actions:**
   - Go to Actions tab
   - Verify green checkmark ✅

---

# Final Recommendation

**Start with Method 1 (SSH + rsync):**
1. It's simpler
2. Works on 99% of cPanel hosts
3. Faster deployments
4. No Node.js needed on server
5. Professional workflow

**Only use Method 2 if:**
- You specifically want cPanel Git UI
- Your hosting provider recommends it
- You don't have SSH access

---

Now let me create the simplified SSH workflow file for you...

1. **Generate SSH key on your local machine**:
   ```bash
   ssh-keygen -t ed25519 -C "github-actions-deploy"
   # Save as: github_deploy_key (no passphrase)
   ```

2. **Add public key to cPanel**:
   - In cPanel: **SSH Access** → **Manage SSH Keys**
   - Import public key (`github_deploy_key.pub`)
   - Authorize it

3. **Add private key to GitHub Secrets**:
   - Secret name: `CPANEL_SSH_KEY`
   - Value: Contents of `github_deploy_key` (private key)

4. **Update workflow to use SSH key**:
   ```yaml
   - name: Deploy to cPanel via SSH
     uses: appleboy/ssh-action@v1.0.0
     with:
       host: ${{ secrets.CPANEL_HOST }}
       username: ${{ secrets.CPANEL_USERNAME }}
       key: ${{ secrets.CPANEL_SSH_KEY }}
       port: ${{ secrets.CPANEL_SSH_PORT }}
       script: |
         cd ~/repositories/dj-portfolio
         ./deploy.sh
   ```

---

## Step 4: Set Up Webhook (Auto-Deploy on Push)

### Option A: cPanel Git Webhook

1. **In cPanel Git Version Control**:
   - Click on your repository
   - Find **"Pull or Deploy"** tab
   - Click **"Update from Remote"**
   - Enable **"Automatic Deployment"**

2. **Set up post-receive hook**:
   ```bash
   cd ~/repositories/dj-portfolio/.git/hooks

   cat > post-receive << 'EOF'
   #!/bin/bash
   cd ~/repositories/dj-portfolio
   ./deploy.sh
   EOF

   chmod +x post-receive
   ```

### Option B: GitHub Actions (Simpler)

Just use the `deploy-git.yml` workflow - it automatically deploys on push to main!

---

## Step 5: Deploy!

### First Time Setup:

1. **SSH into cPanel**:
   ```bash
   ssh username@yourdomain.com -p 22
   ```

2. **Run initial deployment manually**:
   ```bash
   cd ~/repositories/dj-portfolio
   git pull origin main
   npm install
   npm run generate
   cp -r .output/public/* ~/public_html/
   ```

### Automatic Deployments:

After setup, just push to GitHub:
```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub Actions will automatically:
1. Build your Nuxt app
2. SSH into cPanel
3. Pull latest code
4. Copy built files to public_html

---

## Comparison: Git vs FTP

| Feature | Git Version Control | FTP |
|---------|-------------------|-----|
| **Speed** | ⚡ Fast (only changes) | 🐌 Slow (all files) |
| **Reliability** | ✅ Version control | ❌ Can break mid-transfer |
| **Rollback** | ✅ Easy (`git checkout`) | ❌ Manual backup needed |
| **Security** | ✅ SSH encrypted | ⚠️ Less secure |
| **Setup** | Medium | Easy |

---

## Simplified Workflow (Recommended)

Instead of building on cPanel, build on GitHub and deploy files:

### Update `deploy-git.yml`:

```yaml
name: Deploy to cPanel via Git

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install and Build
        run: |
          npm install
          npm run generate

      - name: Deploy via rsync
        uses: burnett01/rsync-deployments@6.0.0
        with:
          switches: -avzr --delete
          path: .output/public/
          remote_path: ${{ secrets.CPANEL_PUBLIC_PATH }}
          remote_host: ${{ secrets.CPANEL_HOST }}
          remote_user: ${{ secrets.CPANEL_USERNAME }}
          remote_key: ${{ secrets.CPANEL_SSH_KEY }}
          remote_port: ${{ secrets.CPANEL_SSH_PORT }}
```

This way:
- ✅ Build happens on GitHub (faster servers)
- ✅ Only deploy final static files
- ✅ No Node.js needed on cPanel
- ✅ Faster deployments

---

## Troubleshooting

### Issue: "Permission denied (publickey)"
**Solution**:
- Check SSH key is added to cPanel
- Verify key format (no extra spaces)
- Try password authentication first

### Issue: "Git not found"
**Solution**:
- Contact hosting provider to install Git
- Use cPanel Terminal to check: `git --version`

### Issue: "npm: command not found"
**Solution**:
- Install Node.js in cPanel (if available)
- OR build on GitHub, deploy static files only

### Issue: SSH port blocked
**Solution**:
- Check firewall allows SSH port
- Try different port (2222 is common alternative)
- Contact hosting provider

---

## Recommended: Hybrid Approach

**Best of both worlds:**

1. **Build on GitHub Actions** (fast servers)
2. **Deploy via rsync over SSH** (fast, incremental)
3. **No dependencies on cPanel server** (simpler)

This is what the simplified workflow above does!

---

## Next Steps

1. ✅ Enable SSH access in cPanel
2. ✅ Set up SSH key or use password
3. ✅ Add GitHub secrets
4. ✅ Push to GitHub
5. ✅ Watch automatic deployment!

**This is much better than FTP!** 🚀
