FROM node:16

EXPOSE 8080

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]