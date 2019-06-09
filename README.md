# How to run

Create env variable `MONGODB_URI`, otherwise app will connect to `108.61.178.34`
Create env variable `PORT`, default value is `3000`
Run following commands for running application
```sh
$ npm install 
$ npm run start
```
# Linting
App is using `eslint` with `standard` configuration
Run it using following command
```sh
$ npm lint
```
If you want also fix, run
```sh
$ npm lint:fix 
```
### Todos

 - Add Swagger, Apiary other api documentation
 - Add postman for end to end tests
 - Add mocha for unit tests
