FROM node:12

WORKDIR /app/

#yarn.lock
COPY package.json /app/

RUN npm install

COPY . /app/

EXPOSE 3000
