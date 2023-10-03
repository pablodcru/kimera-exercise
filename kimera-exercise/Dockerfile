FROM node:18-alpine as BUILD_IMAGE
WORKDIR /kimera-exercise

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#Here, we are implementing the multi-stage build. It greatly reduces our size
#it also won't expose our code in our container as we will only copy
#the build output from the first stage

#beginning of second stage
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /kimera-exercise

#here, we are copying /kimera-exercise/dist folder from BUILD_IMAGE to
#/kimera-exercise/dist in this stage
#why dist folder? when we run npm run build, vite will generate dist directory that contents
#our build files
COPY --from=BUILD_IMAGE /kimera-exercise/dist/ /kimera-exercise/dist/
EXPOSE 8080

COPY package.json .
COPY vite.config.js .

EXPOSE 8080
CMD["npm", "run", "preview"]