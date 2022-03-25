# pull official base image
FROM node

# set working directory
WORKDIR /cyberminds-frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install npm -g
RUN npm install nodemon -g


# add app
COPY . ./

# start app
CMD ["npm", "start"]