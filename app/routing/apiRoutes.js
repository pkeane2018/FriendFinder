var friendData = require("../data/friends.js");

var x;

module.exports = function(app) {

    app.get("/api/friends", function(req, res){

        res.json(friendData)

    });

    app.post("/api/friends", function(req, res){

    var allFriends = [];
    var difference;
    
    
      for (a = 0; a < (data.length - 1); a++) {

        var totalDifference = 0;

        for (b = 0; b < 10; b++) {
          
          // console.log(data);
          // console.log(newFriend);

          var yourscore = newFriend.scores[b];
          console.log(yourscore);

          var friendscore = data[a].scores[b];
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

      compareMatches();

    function compareMatches () {

    // var matches = [];

    x = 0;
    // var y = 0;
    // var tie = false;

    for (i = 1; i < allFriends.length; i++) {

    // if ((allFriends[i] < allFriends[i - 1]) && (allFriends[i] <  allFriends[x])) 
    
    if (allFriends[i] <  allFriends[x]) {
    
      x = i;
      console.log("X is " + x);

    };

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

};
       friendData.push(req.body);
       res = x;
}

)};

