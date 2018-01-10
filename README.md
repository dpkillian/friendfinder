# friendfinder
A web-based application that queries the user to rate 10 questions on a scale of 1 to 5.  It then searches through the existing list (array) of friends to find the best match, aka "Friend".


## Description
This application is built using Node.js Express, jQuery, Bootstrap v3, Glyphicons, body-parser and path.  It runs in the browser on localhost:3030 or is hosted on Heroku [here](https://www.heroku.com/).


To run Friend Finder, follow the steps below:
```
git clone git@github.com:dpkillian/friendfinder.git
cd friendfinder
npm install
node server.js
open browswer (http://localhost:3030)```



## Running Friend Finder
After typing "http://localhost:3030", in the broswer address window, the user is presented with the following screen.

Initial screen shot of Friend Finder
![Main Screen 1](/images/ff1.jpeg)

	
Initial screen shot of the bamazon_db in Sequel Pro
![bamazonCustomer.js Screenshot 2](/images/cust2.jpeg)


Selecting item 1 (air compressor), the user is then asked for the quantity (10):
![bamazonCustomer.js Screenshot 3](/images/cust3.jpeg)


The order summary is showing the details of the order:
![bamazonCustomer.js Screenshot 4](/images/cust4.jpeg)


Looking at the updated Sequel Pro screen, the stock_quantity is changed to reflect the new inventory total:
![bamazonCustomer.js Screenshot 5](/images/cust5.jpeg)





## Running bamazonManager.js

After typing "node bamazonManager.js", the user is presented with the following screen.

Initial screen shot of bamazonManager.js
![bamazonCustomer.js Screenshot 1](/images/mngr1.jpeg)
