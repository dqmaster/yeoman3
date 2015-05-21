#Build myapp server Docker container test
FROM nginx
MAINTAINER David Ma
COPY dist /usr/share/nginx/html/