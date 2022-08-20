FROM node:16-alpine


WORKDIR /app


COPY package*.json ./

RUN npm ci

# copy the source file into the image 
COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]