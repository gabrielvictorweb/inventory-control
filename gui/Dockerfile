FROM node:20-alpine

WORKDIR /api 

LABEL maintainer="Gabriel Victor <gabrielvictorweb@gmail.com>"

LABEL description="This example Dockerfile installs node"

COPY ./gui .

RUN npm install

EXPOSE 5173

CMD npm run dev
