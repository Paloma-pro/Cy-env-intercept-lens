FROM cypress/base:latest

WORKDIR /home/cypress/

COPY package.json package-lock.json* ./

RUN npm install

RUN npx cypress verify

COPY . /home/cypress/

CMD [ "npx", "cypress", "run"]