var friendData = require("../data/friends.js");

var x;

module.exports = function(app) {

    app.get("/api/friends", function(req, res){

        res.json(friendData)

    });

    app.post("/api/friends", function(req, res){

    friendData.push(req.body);
    var newFriend = req.body;
    var allFriends = [];
    var difference;
    var topMatch;
    
      for (a = 0; a < (friendData.length - 1); a++) {

        var totalDifference = 0;

        for (b = 0; b < 10; b++) {
          
          // console.log(data);
          // console.log(newFriend);

          var yourscore = newFriend.scores[b];
          console.log(yourscore);

          var friendscore = friendData[a].scores[b];
            console.log(friendscore);

            difference = (parseInt(yourscore) - parseInt(friendscore));

            console.log("The difference is " + difference);
          
          if ((isNaN(difference)) == false) {

            if (difference < 0) {

              difference = (difference * (-1));

            }
            console.log("The difference is " + difference)
            totalDifference += difference;
            console.log("The total difference is " + totalDifference);

        }

        else {

          console.log("ANSWER ALL THE QUESTIONS NEXT TIME!");

        }
          
        }

        allFriends.push(totalDifference);
        console.log("TIME FOR NEW FRIEND");

      }   

      console.log(allFriends);   

function sendBackData(x) {

    console.log("The Match number is " + x);
    res.status().send(topMatch)

;}

    function compareMatches () {

    // var matches = [];

    x = 0;
    // var y = 0;
    // var tie = false;

    for (i = 1; i <= allFriends.length; i++) {

    // if ((allFriends[i] < allFriends[i - 1]) && (allFriends[i] <  allFriends[x])) 
    
    if (allFriends[i] <  allFriends[x]) {
    
      x = i;
      console.log("X is " + x);

    };

    topMatch = friendData[x];
    // else if (allFriends[i] ===  allFriends[x]) {

    //     console.log(tie);
    //     tie = true;
    //     y = i;
    //     matches.push(y);
    //     console.log("Y is " + y);
    //     console.log(tie);

    // }

    // else {

    //   x = i - 1;
    //   console.log(x);

    // }

    };

    sendBackData(x);

    }     
    
    compareMatches();
}

)};

