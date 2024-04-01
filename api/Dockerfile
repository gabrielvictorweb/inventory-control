FROM node:20.10-alpine

WORKDIR /api 

LABEL maintainer="Gabriel Victor <gabrielvictorweb@gmail.com>"

LABEL description="This Dockerfile installs node"

COPY ./api .

RUN npm install

EXPOSE 8000