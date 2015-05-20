#Build myapp server Docker container test
FROM coreos/apache
MAINTAINER David Ma
COPY dist /var/www/