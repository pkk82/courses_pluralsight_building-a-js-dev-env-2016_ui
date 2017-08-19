## Package Management

### Package Managers

Use node v6

Use package.json from bit.ly/jsdevpackagejson

### Package Security

    npm install -g nsp
    nsp check

## Development Web Server

### Sharing Work-in-progress

#### localtunnel

* npm install -g localtunnel
* start your app
* lt --port 3000 --subdomain pkk82

#### ngrok

* sign up
* install ngrok
* install authtoken
* start your app
* ./ngrok http 80 

#### now

* npm install -g now
* create start script
* now

#### surge

* npm install -g surge
* surge

## Automation

### Demo: npm Scripts

    npm run start 

OR

    npm start

### Demo: Concurrent Task

For silent:

   npm start -s

## Transpiling

### JavaScript Versions

* ES1 - 1997
* ES2 - 1998
* ES3 - 1999
* ES5 - 2009
* ES6/ES2015 - 2015
* ES7/ES2016 - 2016
* ES8/ES2017 - 2017

### Transpilers

[Languages that compile to js](https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js)


## Linting

### Demo: ESLint Set Up

[Recommended](http://bit.ly/jsdeveslint)

## HTTP Calls

### HTTP Call Approaches

[Browser Polyfill fetch](http://github.com/github/fetch)
