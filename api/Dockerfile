FROM node:20-alpine

# Create app directory
WORKDIR '/usr/app'

# install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 7777

# start
CMD [ "npm", "start"]  
