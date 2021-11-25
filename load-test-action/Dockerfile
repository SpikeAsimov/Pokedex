FROM debian:10.3-slim
LABEL maintainer="Arroyo Walter"

RUN apt-get update && apt-get install -y --no-install-recommends apt-utils


ENTRYPOINT ab -n $INPUT_NUMBER_OF_REQUESTS -c $INPUT_CONCURRENCY $INPUT_URL

