#!/bin/bash

# VPS Setup Script for Ellen Spear Group
# Target: 167.86.68.126 | Domain: ellenspeargroup.com
# This script installs Node.js, clones the repo, and sets up Nginx.

REPO_URL="https://github.com/Billymcokello24/ELLEN-SPEAR-GROUP-LIMITED.git"
DOMAIN="ellenspeargroup.com"
APP_DIR="/var/www/$DOMAIN"

echo "🛡️ Starting Professional VPS Setup..."

# 1. Update and Install Prerequisites
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx certbot python3-certbot-nginx curl

# 2. Install Node.js (LTS v20)
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 3. Prepare Web Directory
echo "📁 Preparing application directory..."
sudo mkdir -p $APP_DIR
sudo chown -R $USER:$USER $APP_DIR
cd $APP_DIR

# 4. Clone Repository
echo "📂 Cloning repository..."
if [ -d ".git" ]; then
    echo "Updating existing repo..."
    git pull
else
    git clone $REPO_URL .
fi

# 5. Install & Build
echo "🏗️ Installing dependencies and building..."
cd ellen-spear-app
npm install
npm run build

# 6. Configure Nginx
echo "⚙️ Configuring Nginx..."
cat <<EOF | sudo tee /etc/nginx/sites-available/$DOMAIN
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    root $APP_DIR/ellen-spear-app/dist;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|pdf)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    access_log /var/log/nginx/$DOMAIN.access.log;
    error_log /var/log/nginx/$DOMAIN.error.log;
}
EOF

# 7. Enable Site
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx

# 8. Firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable

echo "✅ Setup Complete!"
echo "🔐 To enable SSL, run: sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
