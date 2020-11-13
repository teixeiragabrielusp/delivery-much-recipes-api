# Delivery Much Backend Tech Challenge

Recipes API - built with NodeJs and Express by [Gabriel Teixeira](https://github.com/teixeiragabrielusp).

---

#### Index
[Guidelines](#guidelines)

[Requirements](#requirements)

[Setting Up](#settingup)

[Usage](#usage)

[Tests](#tests)

[Linter](#linter)

---

## <a name="guidelines"/> Guidelines

Challenge description: (https://github.com/delivery-much/challenge)

---

## <a name="requirements"/> Requirements

- [NodeJS](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## <a name="settingup"/> Setting Up

1. First of all you will need to clone this repo to your local machine, you will be able to do that:

* a) With HTTPS:

> git clone https://github.com/teixeiragabrielusp/delivery-much-recipes-api.git

* b) With SSH: 
> git clone git@github.com:teixeiragabrielusp/delivery-much-recipes-api.git

2. Create at the root of the project your .env file and fill out with the environments variables

```sh
  PORT=
  URLRECIPE=
  URLGYPHY=
  TOKENGYPHY=
```
To generate your giphy token you will need to follow to [Giphy](https://developers.giphy.com/), create your account and then click on **Create an App** and select the API option, after that you will be able to configure your app and generate the token. To look for futher instructions you can click [here](https://developers.giphy.com/docs/sdk).

---

## <a name="usage"/> Usage

After setting up and configure the project you are able to run and use the **Recipes API**, to do that you can use *docker* or *npm* command lines.

### Docker

To initiate the project with *docker* you will need to run:

``` bash
$ docker-compose up
```

### npm

To initiate the project with *npm* you will need to run:

``` bash
$ npm start
```

---

## <a name="tests"/> Tests

### Docker

To run unit test with *docker* you will need to:

``` bash
$ docker-compose run --rm app npm run test
```

### npm

To run unit test with *npm* you will need to run:

``` bash
$ npm run test
```

## <a name="linter"/> Linter

### Docker

To run linter and prettier with *docker* you will need to:

``` bash
$ docker-compose run --rm app npm run lint
```

``` bash
$ docker-compose run --rm app npm run format
```

### npm

To run linter and prettier with *npm* you will need to:

``` bash
$ npm run lint
```

``` bash
$ npm run format
```