FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "src/server.js"]

EXPOSE 4444