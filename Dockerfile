FROM node:14-alpine AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=build /app/public .