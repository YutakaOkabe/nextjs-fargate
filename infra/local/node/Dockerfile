FROM node:22-alpine

WORKDIR /app

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

COPY ./package*.json ./
RUN npm install

CMD ["npm", "run", "dev"]
