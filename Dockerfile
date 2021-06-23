FROM library/node:latest

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 4000

ENTRYPOINT ["node_modules/.bin/nodemon", "server.js"]
