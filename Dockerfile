FROM node:16.17.0 AS builder

WORKDIR /app
COPY package.json ./

RUN npm install

COPY . .

FROM node:16.17.0-slim
COPY --from=builder /app /app
WORKDIR /app
EXPOSE 3333

CMD [ "npm", "run", "dev" ]