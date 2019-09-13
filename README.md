# RPS project v2.0

This is an update to the Rock-Paper-Scissors project from The Odin Project. The main objective is to add an "interface" to the game, rather than playing with browser prompts, alerts, and the console log.

Some guiding steps:
* Remove the five-round logic for now.
* Create 3 buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked.
* Add a div for displaying the results and change all the console.logs into DOM methods.
* Display the running score, and announce a winner of the game once one player reaches 5 points.
