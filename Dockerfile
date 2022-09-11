FROM node:16-alpine

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 30000

CMD ["npm", "start"]