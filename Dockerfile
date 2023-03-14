FROM node:15

WORKDIR /app

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "serve"]