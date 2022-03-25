# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Katherin Jimenez**

Time spent: **25** hours spent in total

Link to project: https://vigorous-thunder-wash.glitch.me/
Link to code: https://glitch.com/edit/#!/vigorous-thunder-wash

## Required Functionality

The following **required** functionality is complete:
* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Buttons are disabled while the sequence is being played 
- [x] Player has 4 different difficulty levels to choose from on home screen
- [x] Amount of lives vary depending on difficulty level
- [x] A wrong guess will show a different image 

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://support.glitch.com/t/how-do-i-make-it-so-that-something-i-put-in-is-centered-on-a-glitch-website/16530
https://www.teachucomp.com/add-a-line-break-in-html-tutorial/#:~:text=To%20add%20a%20line%20break%20to%20your%20HTML%20code%2C%20you,enter%20creates%20another%20blank%20line.
https://imagecolorpicker.com/color-code/2596be
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.youtube.com/watch?v=-9MSxO0uSec


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The biggest challange I faced while working on this project would have to be making the correct image appear on the button depending if the button pressed was correct or wrong. I think the reason I struggled a lot with this feature was because I was not sure how to go about implementing the logic in the JS file with the CSS file. At first, I focused on trying to somehow use the active class. However, I quickly realized that this would not work. Then, I tried to change the function that onClick called. I then realized that this would not work either because the image would not sync up with the sounds being played and would lag. After doing some reserach, I realized that onMousClick is triggered only once the user has pressed and released the button. This is when I realized I needed to focus on the function that onMouseDown was calling.  

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
A question I have about web development would be how to implement containers in order to align elements. After implementing the feature where a player has a certain amount of lives, I wanted to be able to display the remaining lives right on the screen.  However, I found it difficult to align the life circles properly in relation to the buttons. I was reading up on it, and it seems like I would have to learn more about containers in order to implement this feature. Also, I would have liked to have more time to find out why I wasn’t able to disable the buttons when I wanted them to be disabled. 



4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
The biggest thing I wish I had been able to add to this project would be disabling the buttons when the tones are playing. This would prevent a user from being able to click a button while the tones are playing. After reading online on how to possibly implement this feature, I spent some time trying to use the disable property of buttons. However, I was not able to finish this feature. 
Also, I would have liked to have  added an option to continue onto the next level if you win the game at a level before Impossible. I was reading online on how to do it, and it seemed like I would have had to replace the alert box with something else where user could select their option to continue or go back to the main page. This is something I would have definitely liked to learn more about and implement in the project. 
I also tested my program on multiple devices, and I would have liked to be able to format the buttons so that on smaller screens, the 6th button of the Impossible level would not be sent to the next line, and instead the buttons would be resized so they fit on the page. 



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Katherin Jimenez]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.