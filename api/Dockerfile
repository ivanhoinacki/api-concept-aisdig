FROM node:10-slim

RUN npm i npm@latest -g

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new dir
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/node_app/node_modules/.bin:$PATH

# Get all the code needed to run the app
# Get all the code needed to run the app
COPY server.js /usr/src/app
COPY .env /usr/src/app
COPY .eslintrc.js /usr/src/app
COPY .sequelizerc /usr/src/app
COPY nodemon.json /usr/src/app
COPY app /usr/src/app/app

EXPOSE 9000

CMD ["npm", "start"]
