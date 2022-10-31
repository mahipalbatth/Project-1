#Beer Project (Project 1)


Page Load Functions
-First Page makes call to beer api to grab the big beer object.
-it is json object with many beers, each beer has many specific details like name, food pairing, and image of beer
-3 arrays are created to hold the values of all beer names, all beer food pairings, and all beer image urls


Random Beer Generator
Event Listener #1 (Click Event Listener)
-The outer most DOMLoaded event listener was to make sure that my api fetch call was success and i have my big beer object
-Click button to get how many hours are left in the day and a random beer name suggestion
-Date formula was references from google. Based on current time, I extracted how many hours are left in the day
-random number formula was references from google/stack overflow (since I am passing my array length, I did not want the length value to be returned as my random number so formula was modified and I did not put '+1')
-once i get my random number, that is the index I use in the beer name array to show a beer suggestion.

Whats on the Menu
Event Listener#2 (Keypress Event Listener)
-i used same random number formula from previous section
-i made sure to use same random number from the name array and from the food pairing array
-when user presses any keyboard key, new random number is generated and a new beer and food pairing combo is shown

Beer artwork
Event Listener #3 (Touch Event Listener)
-i used same random number formula from previous sections
-i updated the image src attribute with the url of the beer art extracted from the image array at the random number index i found from previous step
-users who have touch screen can tap the screen to change/generate new random number and get a new artwork
-i added button as backup for users who dont have touch device to do the same action

