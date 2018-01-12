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
  // When a user visits the link /api/friends (statically linked in the footer of
  // home.html and survey.html) they are shown the data in the friends.js table...
  // via res.json which returns a JSON object called friendsData which is linked via 'require'
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  }); 


  // API POST Requests
  // Below code handles when a user submits the answers to all 10 question. This sends data to the server.
  // When a user clicks submit the question data is passed thru the "req" variable (a JSON object)
  // ...and the subsequent statements are executed.  In this code block, the req object (new user name,
  // photo link and question scores) is parsed.  2 nested loops compare scores of all of the friends in the
  // friendsArray with the new user/friend.  The totals are compared and a conditional tests to see if
  // the score comparison is better than the previous friend.  The closest match is saved in the friendsArray
  // and returned via the res.json method which passes the best match data back to the jquery $.post call
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Our "server" will respond to requests and let the user know
    // who is the closest match.  It will do this by comparing the differences in the users' scores.
    // req.body is the "requested" data (user's input from the survey called newFriend)

    var userResponse = req.body;
    var newUserScores = userResponse.scores; // array [strings] of scores from user
    var newUserName = userResponse.name; // name of new user
    var newUserTotalScore = 0;
    var lowestScoreDifference = 50; // set initial best/lowest difference to max of 10 questions (10*5)
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

    for (var i = 0; i<friendsData.length; i++){

      var singleDiff = 0;

      for (var j = 0; j<newUserScores.length; j++){

        singleDiff = singleDiff + Math.abs(friendsData[i].scores[j] - newUserScores[j]);

      }

      if (singleDiff < lowestScoreDifference) {
        lowestScoreDifference = singleDiff;
        bestMatchName = friendsData[i].name;
        bestMatchImage = friendsData[i].photo;
      }

      // console.log("Friend " + j + ": " + friendsData[j].scores);
    }

    console.log("Best Match Name: " + bestMatchName);
    console.log("Best Match Image: " + bestMatchImage);
    friendsData.push(userResponse);  // write user input to friendsData
    // console.log(friendsData);

    // Send best match response
    res.json({status: 'OK', bestMatchName: bestMatchName, bestMatchImage: bestMatchImage});
    
  });


};
