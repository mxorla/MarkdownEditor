FROM node:10-alpine

RUN mkdir -p /usr/src/code
WORKDIR /usr/src/code

COPY . ./

RUN npm install --production && npm install

EXPOSE 3000

CMD npm run dev