FROM node:16.14.2

EXPOSE 3000
WORKDIR /app


RUN apt-get -y update
RUN apt-get install -y apt-transport-https build-essential libgconf-2-4 python git libglib2.0-dev

COPY ./scripts ./scripts
RUN chmod +x /app/scripts/start.sh

COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.build.json ./tsconfig.build.json
COPY ./package.json ./package.json
COPY ./nest-cli.json ./nest-cli.json
COPY ./src ./src
# COPY ./.env.tmp ./.env

RUN yarn
RUN yarn build
CMD ["bash", "/app/scripts/start.sh"]