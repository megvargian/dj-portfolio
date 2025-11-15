# 🚀 Quick Start: Deploy to cPanel

Choose your deployment method:

---

## ⚡ METHOD 1: SSH + rsync (RECOMMENDED - EASIEST)

### ✅ Requirements:
- SSH access to your cPanel (most hosts have this)

### 📝 Setup (5 minutes):

#### 1. Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "cpanel-deploy"
# Press Enter 3 times (use defaults, no passphrase)
```

#### 2. Add Public Key to cPanel
```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
# Windows: notepad ~/.ssh/id_ed25519.pub
```

- Log into **cPanel → SSH Access → Manage SSH Keys**
- Click **Import Key**, paste the public key
- Click **Authorize**

#### 3. Add GitHub Secrets

**GitHub → Settings → Secrets → Actions** - Add these 5 secrets:

```
CPANEL_HOST = yourdomain.com
CPANEL_USERNAME = your-cpanel-username
CPANEL_SSH_PORT = 22
CPANEL_PUBLIC_PATH = /home/yourusername/public_html
CPANEL_SSH_KEY = (copy entire private key from ~/.ssh/id_ed25519)
```

**Get public_html path:**
```bash
ssh username@yourdomain.com
pwd  # Shows /home/username
cd public_html
pwd  # Shows /home/username/public_html (use this!)
```

#### 4. Deploy!
```bash
git add .
git commit -m "Add SSH deployment"
git push origin main
```

Watch deployment in **Actions** tab! ✅

**Workflow file:** Uses `.github/workflows/deploy-ssh.yml`

---

## 🎨 METHOD 2: cPanel Git Version Control UI

### ✅ Requirements:
- "Git Version Control" feature in cPanel (check first!)

### 📝 Setup (10 minutes):

#### 1. Check for Git Feature
- Log into **cPanel**
- Search for **"Git Version Control"**
- ❌ Don't see it? **Use Method 1 instead**
- ✅ See it? Continue below

#### 2. Clone Repository in cPanel
- Click **"Create"**
- Clone URL: `https://github.com/megvargian/dj-portfolio.git`
- Path: `/home/yourusername/repositories/dj-portfolio`
- Click **Create**

#### 3. Set Up Webhook (Auto-Deploy)
**In cPanel Git:**
- Click **Manage** on your repo
- Find webhook URL (copy it)

**In GitHub:**
- **Settings → Webhooks → Add webhook**
- Paste cPanel webhook URL
- Click **Add webhook**

#### 4. Build on GitHub, Pull to cPanel

Since cPanel doesn't have Node.js, build files on GitHub first.

**Use this workflow** (create `.github/workflows/cpanel-git.yml`):
```yaml
name: Build for cPanel Git

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Build
        run: |
          npm install
          npm run generate

      - name: Commit built files
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"

          # Move built files to root
          rm -rf .nuxt node_modules
          cp -r .output/public/* .

          git add -A
          git commit -m "Auto-build $(date)" || exit 0
          git push
```

**In cPanel Git UI:**
- Click **Pull or Deploy → Update from Remote**
- Or wait for webhook to trigger

---

## 🆚 Comparison

| | Method 1: SSH | Method 2: Git UI |
|---|---|---|
| **Setup Time** | 5 min | 10 min |
| **Difficulty** | ⭐⭐ Easy | ⭐⭐⭐⭐ Medium |
| **Works on** | 99% of cPanel | Only if feature exists |
| **Speed** | ⚡⚡⚡ Fast | ⚡⚡ Medium |
| **Best for** | Everyone | Visual Git lovers |

---

## 🎯 My Recommendation

**Use Method 1 (SSH + rsync)** because:
- ✅ Simpler setup
- ✅ Works everywhere SSH is available
- ✅ Faster deployments
- ✅ Industry standard approach
- ✅ No cPanel Node.js needed

---

## 🔧 Troubleshooting

### "Permission denied (publickey)"
- Check SSH key is authorized in cPanel
- Try adding password: `CPANEL_PASSWORD` secret instead of `CPANEL_SSH_KEY`

### "Connection refused"
- Verify SSH port (try 22 or 2222)
- Check SSH is enabled in cPanel

### "Git Version Control not found"
- Use Method 1 instead
- Or contact hosting to enable feature

### Files deployed but site not updating
- Clear browser cache (Ctrl+Shift+R)
- Check files in cPanel File Manager
- Verify `.htaccess` exists in public_html

---

## 📚 Full Documentation

See `DEPLOY_WITH_GIT.md` for complete details on both methods.

---

## ✅ Quick Test

After deployment:
```bash
# SSH into server
ssh username@yourdomain.com

# Check files
ls -la ~/public_html
# Should see: index.html, _nuxt/, etc.
```

Visit `https://yourdomain.com` - Your site is live! 🎉
