FROM node
WORKDIR /app
copy package.json /app
run npm install
copy . /app
CMD node server.js
EXPOSE 8080