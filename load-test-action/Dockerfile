FROM alpine:latest

RUN apk add --no-cache apache2-utils

ENTRYPOINT ab -n $INPUT_NUMBER_OF_REQUESTS -c 50 $INPUT_URL

