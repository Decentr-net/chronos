ARG NODE_VERSION=14-alpine
ARG NGINX_VERSION=alpine

FROM node:${NODE_VERSION}
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
COPY . .
RUN npm i && npm run build:prod

FROM nginx:${NGINX_VERSION}
COPY --from=0 /usr/src/app/dist/chronos /usr/share/nginx/html/
COPY ./scripts/nginx.conf /etc/nginx/conf.d/default.conf
