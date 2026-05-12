#!/bin/bash

# Configuration
VPS_IP="167.86.68.126"
DOMAIN="ellenspeargroup.com"
USER="root" # Change if using a different user

echo "🚀 Preparing deployment for $DOMAIN..."

# 1. Build the project
echo "📦 Building project..."
npm run build

# 2. Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed. Please check errors."
    exit 1
fi

# 3. Create remote directory and upload files
echo "📤 Uploading files to VPS..."
ssh $USER@$VPS_IP "mkdir -p /var/www/$DOMAIN/html"
rsync -avz --delete dist/ $USER@$VPS_IP:/var/www/$DOMAIN/html/

# 4. Upload Nginx config
echo "⚙️ Uploading Nginx configuration..."
scp nginx.conf $USER@$VPS_IP:/etc/nginx/sites-available/$DOMAIN

# 5. Enable site and restart Nginx
echo "🔄 Enabling site and restarting Nginx..."
ssh $USER@$VPS_IP "ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/ && nginx -t && systemctl restart nginx"

echo "✅ Deployment complete! Visit http://$DOMAIN"
echo "🔐 Note: Run 'certbot --nginx -d $DOMAIN -d www.$DOMAIN' on the VPS for SSL."
