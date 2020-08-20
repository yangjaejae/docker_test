#!/bin/bash
DOCKER_CONTAINER_NAME="web"
DOCKER_IMAGE_NAME="web/nodejs"
DOCKER_IMAGE_TAG="v1.0.0"
echo "start WEB Server"

cd /home/ec2-user/vpc_web

echo "Build image#############################################"
docker build -t ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG} .