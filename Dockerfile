FROM mhart/alpine-node:10

RUN apk add --no-cache make gcc g++ python git && \
    mkdir -p /usr/src/app && \
    adduser -S user && \
    chown -R user /usr/src

WORKDIR /usr/src
COPY package.json yarn.lock bower.json ./
RUN yarn && ./node_modules/.bin/bower install --allow-root
COPY . .
RUN yarn build && mv dist /public
