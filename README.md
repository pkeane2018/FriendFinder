# FriendFinder

This application allows users to find potential friends they are compatible with. 

## How to run on local machine
The repository can be cloned by clicking the Clone or Download button on the main repository page, then clicking the button next to the url which appears below. Then open a Terminal or Git Bash window, navigate to the location where you want to place the cloned repository, then type 'git clone' and then paste the repository that was just copied. The neccessary node packages can installed by navigating into the main directory in the terminal and entering 'npm install.' The site can then be started by entering 'node server.js' in the terminal while still in the main directory. The site can be opened in a web browser by typing 'localhost:8080' into the address bar.  

## Repository organization


## How to use site
The user enters his or her name, a url to a picture of him or herself and answers ten questions. After completing these questions, the user clicks the submit button, which triggers a post request that sends the user's data to the friends api, as well as a get request that brings data on potential friends from the api. A modal popup then displays the name and picture of the potential friend who is the highest match with the user. This match is determined based on which potential friend in the friends api has the smallest difference in answers on the questions between themselves and the user.

## Future Improvements
Functionality could be added to handle cases where more than one potential friend has the same difference in scores between him or herself and the user.

## Link to deployed site
<a href = "https://desolate-garden-58915.herokuapp.com/">Friend Finder site</a> 
