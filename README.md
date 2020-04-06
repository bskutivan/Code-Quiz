# Code-Quiz
## Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

## Proposed Plan of Action

I laid out the framework for the project by tackling the HTML and CSS first and then working via pseudocode with the JavaScript.

I at first overcomplicated the JS with forEach() methods that were not beyind deployed correctly and led to an excessive amount of bugs. I ended up falling short on finishing the project due to bugs. I am currently stuck with an array that is sent to localStorage but then rewritten every time you submit new initials and when i try to use the getItem() method I cannot retrieve the stored information to then publish as a <li> in the highscores list. 
