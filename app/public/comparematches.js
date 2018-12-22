var allFriends = [5,2,3,3]; 

function compareMatches () {

    var matches = [];

        var x = 0;
        var y = 0;
        var tie = false;

        for (i = 1; i < allFriends.length; i++) {

        // if ((allFriends[i] < allFriends[i - 1]) && (allFriends[i] <  allFriends[x])) 
        
        if (allFriends[i] <  allFriends[x]) {
        
          x = i;
          console.log("X is " + x);

        }

        else if (allFriends[i] ===  allFriends[x]) {

            console.log(tie);
            tie = true;
            y = i;
            matches.push(y);
            console.log("Y is " + y);
            console.log(tie);

        }

        // else {

        //   x = i - 1;
        //   console.log(x);

        // }

      };

      matches.push(x);

      if (tie === false) {

        console.log("The match position is " + x);

      }

      else if (tie === true) {

        console.log("You had more than one match");
        console.log("Your matches are in positions ");
        console.log(matches);
        
        for (i = 0; i < matches.length; i++) {

          console.log(data[matches[i]].name);
            
          }

      }

      

      // console.log("The lowest number is in position " + x);

      };

      compareMatches();