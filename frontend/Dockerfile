FROM node:18-alpine AS builder
WORKDIR /app

# 1. Copy package files
COPY frontend/package*.json ./

# 2. Install all dependencies including peer deps
RUN npm install --legacy-peer-deps

# 3. Copy source and config files
COPY frontend/ .

# 4. Build the project
RUN npm run build

# Final nginx stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY infra/nginx.conf /etc/nginx/nginx.conf