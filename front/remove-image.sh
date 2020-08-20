#!/bin/bash
DOCKER_CONTAINER_NAME="web"
DOCKER_IMAGE_NAME="web/nodejs"
DOCKER_IMAGE_TAG="v1.0.0"
echo "start WEB Server"

echo "Remove image#############################################"
docker rmi -f ${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}