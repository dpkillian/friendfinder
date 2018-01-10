# friendfinder
A web-based application that queries the user to rate 10 questions on a scale of 1 to 5.  It then searches through the existing list (array) of friends to find the best match, aka "Friend".


## Description
This application is built using Node.js Express, jQuery, Bootstrap v3, Glyphicons, body-parser and path.  It runs in the browser on localhost:3030 or is hosted on Heroku [here](https://www.heroku.com/).

## **friendfinder** Interface
After typing "http://localhost:3030", in the broswer address window, the user is presented with the following screen.

![Main Screen 1](/app/images/ff1.jpeg)
Initial screen shot of Friend Finder



![Main Screen 1](/app/images/ff2.jpeg)
Survey screen shot of Friend Finder




To run friendfinder locally, follow the steps below:
```
git clone git@github.com:dpkillian/friendfinder.git
cd friendfinder
npm install
node server.js
open browswer (http://localhost:3030)
```
