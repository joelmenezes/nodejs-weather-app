# NodeJS CLI weather app

A command line application which accepts your address and fetches current temperature at that location using Google Geolocation and Darksky APIs 

## Running

Download the compressed repository and extract it. Navigate to the directory using the terminal.

Ensure that you have [node](https://nodejs.org/en/) installed before proceeding.

Run the following command to install the dependencies required:
```
npm install 
```

Run either of the following commands to run the application:
```
node app.js -a <Your Location> 
```
```
node app-promise.js -a <Your Location> 
```

### Examples
```
node app.js -a 400001 
```
```
node app-promise.js -a "350 5th Ave, New York, NY 10118" 
```

### Documentation

Here are some links you may find helpful:

* [Axios](https://www.npmjs.com/package/axios)
* [Darksky](https://darksky.net/dev/docs)
* [Request](https://www.npmjs.com/package/request)
* [Yargs](https://www.npmjs.com/package/yargs)