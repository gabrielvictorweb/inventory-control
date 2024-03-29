FROM node:20-alpine

WORKDIR /api 

LABEL maintainer="Gabriel Victor <gabrielvictorweb@gmail.com>"

LABEL description="This example Dockerfile installs node"

COPY ./api .

RUN npm install

EXPOSE 8000

CMD npm start
