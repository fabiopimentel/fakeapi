FROM node:8.16.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3031
CMD [ "node", "server.js" ]
