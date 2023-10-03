FROM node:18 as BUILD_IMAGE
WORKDIR /kimera-application

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "preview"]

