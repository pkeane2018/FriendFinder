# Friend Finder

This application allows users to find potential friends they are compatible with. 

## How to run on local machine
The repository can be cloned by clicking the Clone or Download button on the main repository page, then clicking the button next to the url which appears below. Then open a Terminal or Git Bash window, navigate to the location where you want to place the cloned repository, then type 'git clone' and then paste the repository that was just copied. The neccessary node packages can installed by navigating into the main directory in the terminal and entering 'npm install.' The site can then be started by entering 'node server.js' in the terminal while still in the main directory. The site can be opened in a web browser by typing 'localhost:8080' into the address bar.  

## Repository organization
 The 'server.js' and 'package.json' files are located in the main directory. The rest of the code needed to run the site is located within the 'app' folder, which contains three subfolders - 'data', 'public', and 'routing.' Inside the 'data' folder is the friends.js file, which contains information on the potential friends, including each of their names, photos, and scores on the survey questions. 
The 'public' folder contains the 'images' folder, which contains the png files with images for each of the potential friends and the 'circles-light' folder, which contains circles-light.png, the file with the background image for each page on the site. In the 'public' folder, 'home.html' contains the html elements for the homepage, along with a link to the bootstrap cdn, css styling information contained within style tags, and a start button with a link to the survey page. 'Public' also contains survey.html which contains the html elements for the survey page, links to the CSS Bootstrap and jQuery cdns, and css styling information contained within style tags. Also inside this file is JavaScript and jQuery code between internal script tags for determining the logic of the page, including make AJAX post requests to the friends api with survey information that the user inputs, making AJAX get requests to retrieve information from the api, determining the potential friend that is the highest match, and displaying this information on the screen. Both the home.html page and survey.html page also contain links to the friends api and to the Github repo for the site.
Also in the 'app' folder is the 'routing' subfolder which contains 'apiRoutes.js' and 'htmlRoutes.js.' 'apiRoutes.js' contains the server-side code for making get requests to retrieve data from the friends api as well as for making post requests to send user input data to the friends api. 'htmlRoutes' contains routing information for displaying the homepage, survey page, or a 404 page, based on the url the navigates to within the site. 

## How to use site
The user enters his or her name, a url to a picture of him or herself and answers ten questions. After completing these questions, the user clicks the submit button, which triggers a post request that sends the user's data to the friends api, as well as a get request that brings data on potential friends from the api. A modal popup then displays the name and picture of the potential friend who is the highest match with the user. This match is determined based on which potential friend in the friends api has the smallest difference in answers on the questions between themselves and the user.

## Technology used

* HTML 
* CSS
* CSS Bootstrap
* JavaScript
* jQuery
* AJAX
* Node.js
* node packages:
    * express
    * path

## Future Improvements
Functionality could be added to handle cases where more than one potential friend has the same difference in scores between him or herself and the user. Within 'survey.html', the code within script tags for handling data that the user inputs, comparing potential matches, determining the best match, and displaying this match to the screen should be moved to a server side file.

## Link to deployed site
<a href = "https://desolate-garden-58915.herokuapp.com/">Friend Finder site</a> 
