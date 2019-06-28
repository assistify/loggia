FROM node:12-alpine

RUN mkdir /src
WORKDIR /src

ADD index.js /src
ADD package.json /src

RUN npm install --production

EXPOSE 3000

CMD node index.js
