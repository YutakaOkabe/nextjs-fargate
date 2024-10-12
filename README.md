# nextjs-fargate
This is the application using Next.js for deploying to AWS Fargate

## Step
### local
```
git clone
docker compose up -d --build
```
`npm run dev` で起動しているのでホストマシンの変更はリロードなしで反映される

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
