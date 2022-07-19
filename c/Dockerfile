FROM ubuntu:bionic

RUN apt-get update && \
    apt-get install -y git make gcc g++ vim \

WORKDIR /usr/src/app

# pre-copy/cache go.mod for pre-downloading dependencies and
# only redownloading them in subsequent builds if they change

COPY . .
# RUN make

# docker build -t experiment . --progress plain
# docker run -it --rm --name experiment-run experiment
