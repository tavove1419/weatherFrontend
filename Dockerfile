#Instalacion node y dist de proyecto angular
FROM node:14.17.0-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Inicio de Servido NgInx
FROM nginx:1.20.0-alpine

#Se copia lo generado en la carpte dist a la ruta del servidor donde se iniciara el proyecto
COPY --from=build-step /app/dist/front-time /usr/share/nginx/html

