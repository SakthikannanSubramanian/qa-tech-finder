FROM node:16 as build-stage
WORKDIR /app

COPY package.json ./
Run npm install

COPY . .

Run npm run build

FROM nginx:alpine
COPY --from=build-stage /app/build/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]