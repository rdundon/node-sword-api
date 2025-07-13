FROM ubuntu:rolling
WORKDIR /api
COPY package*.json ./
RUN apt-get update && apt-get install --assume-yes build-essential nodejs npm libcurl4-gnutls-dev zlib1g-dev pkg-config cmake subversion
RUN npm i
COPY *.js ./
CMD npm start
EXPOSE 3000