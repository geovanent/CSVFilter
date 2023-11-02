# Stage 1: Build the base code. 
FROM node:16.19.0-alpine as buildStage

WORKDIR /app

COPY . /app

RUN [ "yarn" ]

RUN [ "yarn", "build:prod" ]

RUN ["rm", "-rf", "node_modules"]

RUN [ "yarn", "--production" ]

# Stage 2. Run build container code using the code from buildStage phase.
FROM node:16.19.0-buster

WORKDIR /app

COPY --from=buildStage /app/dist/ /app/
COPY --from=buildStage /app/node_modules/ /app/node_modules

EXPOSE 80
ENV APP_PORT=80
ENV NODE_ENV=production
ENV TZ=America/Sao_Paulo

CMD [ "node", "/app/main" ]
