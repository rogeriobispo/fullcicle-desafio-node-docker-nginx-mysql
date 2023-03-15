FROM node:15

WORKDIR /app

COPY package.json .
COPY wait-for-it.sh . 

RUN npm install 

COPY . .
 
RUN chmod u+x wait-for-it.sh

EXPOSE 3000
