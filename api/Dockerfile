FROM node:12.13.0-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm ci

EXPOSE 9000

CMD npm start
