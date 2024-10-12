# nextjs-fargate
This is the application using Next.js for deploying to AWS Fargate

## Step
### local
**プロジェクト作成**
```
git clone
docker compose up -d --build
```
`npm run dev` で起動しているのでホストマシンの変更はリロードなしで反映される

**DB接続**
```
docker compose exec node bash

root@0000:/# psql -U default

default=# create database nextjs_fargate;
default=# \c nextjs_fargate

nextjs_fargate=# create table users(id INTEGER NOT NULL, name VARCHAR(20) NOT NULL, PRIMARY KEY (id));

nextjs_fargate=# insert into users (id,name) values (1,'tanaka');
```
.env.exampleから.env作成（シークレットはベタ書きしてるので変更なし）

### Fargate
https://github.com/YutakaOkabe/terraform-alb-fargate-rds でインフラを作っていることを想定
```
docker build . -t terraform-alb-fargate-rds/app:latest -f infra/ecr/node/Dockerfile
# イメージが起動することの確認（localhost:3002）
docker run --rm -p 3002:3000 terraform-alb-fargate-rds/app

aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 524126162369.dkr.ecr.ap-northeast-1.amazonaws.com

docker tag terraform-alb-fargate-rds/app:latest 524126162369.dkr.ecr.ap-northeast-1.amazonaws.com/terraform-alb-fargate-rds/app:latest

docker push 524126162369.dkr.ecr.ap-northeast-1.amazonaws.com/terraform-alb-fargate-rds/app:latest
```
