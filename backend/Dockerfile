FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Start the application in development mode with live reloading
CMD ["npm", "run", "start:dev"]
