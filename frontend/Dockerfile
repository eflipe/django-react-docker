FROM node:12

WORKDIR /app/

#yarn.lock
COPY package.json /app/

# RUN npm install
RUN yarn install

COPY . /app/

RUN yarn build

WORKDIR /app/frontend/build

RUN mkdir root
# RUN mv *.ico *.js *.json root

# COPY . /app/

EXPOSE 3000
