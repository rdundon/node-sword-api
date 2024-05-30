FROM ubuntu:rolling
WORKDIR /api
COPY package*.json ./
RUN apt-get update && apt-get install --assume-yes build-essential nodejs npm libcurl4-gnutls-dev zlib1g-dev pkg-config cmake subversion
RUN npm ci
COPY *.js ./
CMD npm start --inspect=0.0.0.0:9229
EXPOSE 3000
EXPOSE 9229