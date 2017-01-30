FROM mhart/alpine-node:7.1.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/

RUN apk add --no-cache make gcc g++ python git

RUN npm install
COPY . /usr/src/app

RUN npm run now-build
EXPOSE 4200
CMD ["npm", "run", "now-start"]
