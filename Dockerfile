FROM mhart/alpine-node:7.1.0

RUN apk add --no-cache make gcc g++ python git && \
    mkdir -p /usr/src/app && \
    adduser -S user && \
    chown -R user /usr/src

WORKDIR /usr/src/app
USER user

COPY package.json /usr/src/app/
COPY bower.json /usr/src/app/

RUN npm install && \
    ./node_modules/.bin/bower install

COPY . /usr/src/app

RUN npm run build

EXPOSE 4200
CMD ["npm", "run", "start"]
