FROM node:lts-alpine AS builder

WORKDIR /todo-app

COPY . .

RUN npm i

RUN npm run build:web:express-ts-css

ENTRYPOINT [ "npm", "run", "start:web:express-ts-css" ]


