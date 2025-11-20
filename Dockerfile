# Dockerfile
FROM node:20

WORKDIR /app

# Only install dependencies
COPY package*.json ./
RUN npm install

EXPOSE 4000
CMD ["npm", "run", "dev"]