FROM node:14.17.0-alpine
WORKDIR /usr/app
COPY . .
CMD ["./docker/entrypoint.sh"]