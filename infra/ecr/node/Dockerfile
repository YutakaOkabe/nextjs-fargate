FROM public.ecr.aws/docker/library/node:22-alpine

WORKDIR /app

# 環境変数の設定
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# 必要なパッケージをインストール
RUN apk add --no-cache libc6-compat vim

COPY package*.json ./

RUN npm install --production

COPY . .
# ビルドが通らないのでローカルの設定でビルドを通して、タスク定義から上書きするようにする
# COPY .env.dev .env

RUN npm run build

CMD ["npm", "run", "start"]
