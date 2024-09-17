FROM node:22
WORKDIR /app
ADD package.json /app/package.json
ADD tsconfig.json /app/tsconfig.json
RUN npm install -g @nestjs/cli && npm install
ADD src /app/src
RUN npm run build
CMD ["npm", "run", "start:prod"]
EXPOSE 3000