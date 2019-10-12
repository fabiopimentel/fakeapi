# Fake API

Fake REST API for development

## Run

### Run in Node.JS environment

Install dependencies and execute
By default we using `yarn`, but you can use `npm` if you want. 

- NPM 
```bash
$ npm update
$ npm run start 
```

- Yarn
```bash
$ yarn
$ yarn start
```

### Run in Docker 

#### Docker 

```bash
$ docker build -t fakeapi:latest .
$ docker run --name fakeapi -d -p 3031:3031 fakeapi:latest
```

#### Docker Compose 

```bash
$ docker-compose up -d
```
