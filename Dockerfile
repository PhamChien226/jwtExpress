# FROM node:13.6.0-alpine
FROM node:carbon


WORKDIR /chienpham_2

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

# CMD [ "node", "./bin/www" ]
CMD [ "node", "./servers.js" ]

