FROM node:16
RUN apt-get update
RUN apt-get install lsof
COPY ./package*.json ./
RUN ["npm", "install"]
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]