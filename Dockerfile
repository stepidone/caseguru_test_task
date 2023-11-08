FROM node

WORKDIR /weather_app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build
