FROM node:12-alpine as build

COPY . /src

WORKDIR /src

EXPOSE 8080

RUN yarn install
RUN yarn build

FROM node:12-alpine

WORKDIR /usr/app

COPY --from=build /src/node_modules /usr/app/node_modules
COPY --from=build /src/package.json /usr/app/package.json
COPY --from=build /src/.next /usr/app/.next

ENV NODE_ENV production

CMD ["yarn", "start"]