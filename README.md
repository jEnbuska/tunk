docker-compose --project-name hours run api npm run build
docker tag hours_api:latest joonadocker/tunk:latest
docker push joonadocker/tunk:latest