FROM node:18.14.2

WORKDIR /messenger

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "server.cjs" ]
