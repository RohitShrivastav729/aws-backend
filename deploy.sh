
#!/bin/bash

echo "Starting deployment..."

git pull origin main

npm install

pm2 restart backend || pm2 start server.js --name backend

echo "Deployment finished!"