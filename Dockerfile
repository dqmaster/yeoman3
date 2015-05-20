#Build myapp server Docker container
FROM coreos/apache
MAINTAINER David Ma
COPY dist /var/www/