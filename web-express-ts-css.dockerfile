FROM node:lts-alpine AS builder

WORKDIR /complex-app

COPY . .

RUN npm i

RUN npm run build:lib:repositories && \
    npm run build:lib:services && \
    npm run build:lib:implementations && \
    npm run build:web:express-ts-css

FROM node:lts-alpine AS app

WORKDIR /complex-app
COPY --from=builder /complex-app/package.json /complex-app/package.json

COPY --from=builder /complex-app/lib/repositories/package.json /complex-app/lib/repositories/package.json
COPY --from=builder /complex-app/lib/services/package.json /complex-app/lib/services/package.json
COPY --from=builder /complex-app/lib/implementations/package.json /complex-app/lib/implementations/package.json
COPY --from=builder /complex-app/web/express-ts-css/package.json /complex-app/web/express-ts-css/package.json

RUN npm install --omit=dev

COPY --from=builder /complex-app/lib/repositories/dist /complex-app/lib/repositories/dist
COPY --from=builder /complex-app/lib/services/dist /complex-app/lib/services/dist
COPY --from=builder /complex-app/lib/implementations/dist /complex-app/lib/implementations/dist
COPY --from=builder /complex-app/web/express-ts-css/dist /complex-app/web/express-ts-css/dist

ENTRYPOINT [ "npm", "run", "start:web:express-ts-css" ]


