FROM Node:24.18.0-alpine3.23 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.31.2-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80