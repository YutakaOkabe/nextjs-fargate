FROM public.ecr.aws/docker/library/node:22-alpine

WORKDIR /app

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

COPY . .
RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]
