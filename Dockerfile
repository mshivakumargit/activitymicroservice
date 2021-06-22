FROM library/node:latest

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 9090

ENTRYPOINT ["node_modules/.bin/nodemon", "server.js"]
