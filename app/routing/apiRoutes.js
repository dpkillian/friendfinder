// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friendsArray.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  }); 


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey questions...this data is then sent to the server...
  // Then the server saves the data to the friendsData array (in friends.js))
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let the user know
    // who is the closest match.  It will do this by comparing the differences in the users' scores.
    // req.body is the "requested" data (user's input from the survey called newFriend)

    var userResponse = req.body;
    var newUserScores = userResponse.scores; // array [strings] of scores from user
    var newUserName = userResponse.name; // name of new user
    var newUserTotalScore = 0;
    var bestMatchName;
    var bestMatchImage;

    console.log("\n-------------------------");
    console.log('New Users Name = ' + userResponse.name);
    console.log('New Users Photo = ' + userResponse.photo);
    console.log('New Users Scores (array) = '   + JSON.stringify(newUserScores));
    console.log("-------------------------\n");

    // Test loop to convert array of strings to int and total
    // for (var i = 0; i<userScores.length; i++){
    //   newUserTotalScore = newUserTotalScore + parseInt(userScores[i]);
    //   // console.log("Score " + i + ": " + userScores[i]);
    // }

    // console.log("TotalScore: " + newUserTotalScore);

    for (var j = 0; j<friendsData.length; j++){


      // console.log("Friend " + j + ": " + friendsData[j].scores);
    }

    friendsData.push(userResponse);  // write user input to friendsData
    // console.log(friendsData);
    
  });


  // for(var i=0; i<myArray.length; i++) { myArray[i] = parseInt(myArray[i], 10); }

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   tableData = [];
  //   waitListData = [];

  //   console.log(tableData);
  // });

};
