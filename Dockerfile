FROM node:22-alpine AS builder

WORKDIR app/

# Dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist/ ./static
COPY ./nginx.conf /etc/nginx/nginx.conf

