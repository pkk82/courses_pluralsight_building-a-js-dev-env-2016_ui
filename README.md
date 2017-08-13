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
