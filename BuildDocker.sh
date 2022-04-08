#!/bin/bash
docker stop pathfinding
echo y | docker system prune -a
docker build . -t pathfinding
docker run --name pathfinding -dp 80:80 pathfinding 
read -n1 -r -p '--Finished Rebuilding Docker Image--'