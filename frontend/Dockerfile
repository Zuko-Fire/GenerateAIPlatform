FROM node:20

WORKDIR /app

COPY package*.json ./
# RUN npm i @rollup/rollup-linux-arm64-gnu
RUN npm install

# # Copy the rest of the application files
# COPY frontend ./
COPY . .


# Expose the port Vite will use
EXPOSE 5173

CMD ["npm", "run", "dev"]

# defineConfigにhost設定を入れるのと同じ意味合い
# CMD ["npm", "run", "dev", "--", "--host"]
