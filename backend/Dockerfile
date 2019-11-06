FROM node:carbon


# Create app directory
WORKDIR /usr/src/app

# Config port
ENV PORT 5000
EXPOSE 5000

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "run", "start:docker" ]

