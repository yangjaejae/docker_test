#!/bin/bash

sudo service codedeploy-agent status

if [ $? -eq 4 ];then

   echo "Installing codedeploy-agent"
   sudo yum -y update
   sudo yum -y install ruby
   sudo yum -y install wget
   wget https://aws-codedeploy-ap-northeast-2.s3.amazonaws.com/latest/install
   chmod +x ./install
   sudo ./install auto

elif [ $? -eq 1 ];then

   echo "Start codedeploy-agent"
   sudo service codedeploy-agent start

elif [ $? -eq 0 ];then

   echo "Codedeploy-agent already running"

fi