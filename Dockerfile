FROM node:10

LABEL author="Felix Avelar"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

ENV PORT 80

WORKDIR /usr/src/app/client

RUN npm install

RUN npm run build

WORKDIR /usr/src/app/

EXPOSE 80

CMD ["npm", "start"]
