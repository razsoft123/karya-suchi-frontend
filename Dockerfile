FROM Node:24.18-alpine3.23

RUN npm vite@latest

WORKDIR /app
COPY . ./app

RUN npm run build

