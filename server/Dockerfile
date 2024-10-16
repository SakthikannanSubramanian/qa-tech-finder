FROM node:16

WORKDIR /app

COPY package.json ./
Run npm install --production

COPY . .

EXPOSE 5001

CMD ["node", "server.js"]