# cPanel Deployment Troubleshooting Guide

## Issue: "Failed to connect, server only supports SFTP"

Your cPanel server uses **SFTP** (SSH File Transfer Protocol) instead of **FTP/FTPS**.

---

## Solution 1: Find Your Server's Protocol

### Check with your hosting provider:

1. **Log into cPanel**
2. Look for **"FTP Accounts"** or **"File Manager"**
3. Check the connection details

### Common cPanel Protocols:
- **FTP** - Port 21 (unencrypted - not recommended)
- **FTPS** - Port 21 (FTP over SSL - secure)
- **SFTP** - Port 22 (SSH File Transfer - most secure)

---

## Solution 2: Update GitHub Secrets

### For FTP/FTPS (Port 21):

Go to: **GitHub Repo → Settings → Secrets → Actions**

Keep your existing secrets:
- `FTP_SERVER` → `ftp.yourdomain.com` (or IP address)
- `FTP_USERNAME` → Your cPanel username
- `FTP_PASSWORD` → Your cPanel password
- `FTP_SERVER_DIR` → `/public_html/` (must end with `/`)

The current `deploy.yml` workflow will now try **FTPS protocol on port 21**.

---

## Solution 3: Use SFTP Instead (Port 22)

If your server requires SFTP, add these **NEW** secrets:

| Secret Name | Value | Example |
|------------|-------|---------|
| `SFTP_HOST` | Your server hostname | `yourdomain.com` |
| `SFTP_PORT` | SFTP port (usually 22) | `22` |
| `SFTP_USERNAME` | Your cPanel username | `cpaneluser` |
| `SFTP_PASSWORD` | Your cPanel password | `your-password` |
| `SFTP_REMOTE_DIR` | Remote directory | `/home/cpaneluser/public_html` |

Then use the `deploy-sftp.yml` workflow:

1. Go to **Actions** tab
2. Select **"Deploy to cPanel (SFTP)"**
3. Click **"Run workflow"**

---

## Solution 4: Test Connection Manually

### Test FTP/FTPS:
```bash
# Install FileZilla or use command line
ftp ftp.yourdomain.com
# Enter username and password
```

### Test SFTP:
```bash
sftp username@yourdomain.com
# Enter password
```

---

## Solution 5: Check cPanel Settings

### In cPanel, verify:

1. **FTP is enabled**:
   - Go to: cPanel → **FTP Accounts**
   - Check if FTP access is allowed

2. **Firewall allows connections**:
   - Port 21 for FTP/FTPS
   - Port 22 for SFTP

3. **Passive Mode** (if using FTP):
   - Some servers require passive mode
   - Already enabled in the workflow with `protocol: ftps`

---

## Solution 6: Update Workflow for Different Protocols

### Current workflow (`deploy.yml`) tries:
- **FTPS** on port 21
- With verbose logging

### If you need plain FTP (not recommended):
```yaml
protocol: ftp  # Change from ftps to ftp
port: 21
```

### If you need different port:
```yaml
protocol: ftps
port: 990  # Some hosts use port 990 for FTPS
```

---

## Solution 7: Contact Your Hosting Provider

Ask them:
1. ✅ "Do you support FTP, FTPS, or SFTP?"
2. ✅ "What port should I use?"
3. ✅ "What is the correct hostname?"
4. ✅ "Is passive mode required?"
5. ✅ "What is the full path to public_html?"

---

## Common Hosting Providers Settings

### Hostinger:
- Protocol: FTPS
- Port: 21
- Server: `ftp.yourdomain.com`

### Bluehost:
- Protocol: SFTP
- Port: 22
- Server: `yourdomain.com`

### SiteGround:
- Protocol: SFTP
- Port: 22
- Server: `yourdomain.com`

### GoDaddy:
- Protocol: SFTP or FTP
- Port: 21 (FTP) or 22 (SFTP)
- Server: `ftp.yourdomain.com`

### A2 Hosting:
- Protocol: SFTP
- Port: 22
- Server: `yourdomain.com`

---

## Quick Fix Steps

1. **Identify your protocol** (FTP vs SFTP)
2. **Update secrets** with correct values
3. **Try current workflow** (deploy.yml) - uses FTPS
4. **If fails**, use SFTP workflow (deploy-sftp.yml)
5. **Check GitHub Actions logs** for detailed error

---

## Checking Deployment Success

After successful deployment:

1. **Check cPanel File Manager**:
   - Navigate to `/public_html/`
   - Look for: `index.html`, `_nuxt/`, assets

2. **Visit your domain**:
   - `https://yourdomain.com`
   - Clear browser cache if needed

3. **Check GitHub Actions logs**:
   - Green checkmark = success
   - Red X = check logs for errors

---

## Still Not Working?

### Alternative: Manual FTP Upload

1. **Build locally**:
   ```bash
   npm run generate
   ```

2. **Use FileZilla or cPanel File Manager**:
   - Upload contents of `.output/public/` folder
   - To `/public_html/` directory

3. **Once working manually**, we can fix the GitHub Actions

---

## Need Help?

Provide these details:
1. Hosting provider name
2. Error message from GitHub Actions
3. Connection protocol (FTP/FTPS/SFTP)
4. Port number
5. Whether manual FTP/SFTP works
