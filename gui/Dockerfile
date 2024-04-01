FROM node:20.10-alpine

WORKDIR /gui 

LABEL maintainer="Gabriel Victor <gabrielvictorweb@gmail.com>"

LABEL description="This Dockerfile installs node"

COPY ./gui .

RUN npm install

EXPOSE 5173

CMD npm run dev
