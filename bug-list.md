# Bug List

> Make a list of the things that don't work as expected. Keep a list of things that you have fixed and try to document how you solved them.

1. I will have some problems with centering everything, its been a long time doing HTML and CSS.
I centered the timer nummer and increase it's size for easy read.
2. Problems i encounterd were most of them were missing a letter and the most painful one was the buttons dubble activetet.
By that i mean that when i pressed the "Start" button the timer like stuterd while pressing it the second time, same with the other buttons.
I fixed that by useing the clearInterval function that stop multipel intervals running.

3.Another big problem i encounterd was that the output did update, when i pressed the button on the console.log it worked fine but not on the actual page.
I solved that problem by creating a function called updateTimer and changed the some variables to strings then used inneText to update the timer value.

4.When i pressed the "Reset" button i got 25:0 and not hte 25:00. After some google seraching it showed that a needed a padstart method. 
That methdo gives you the ability to choose the lentght of the string.

5.One thing i reliase that i didn't put an alert when to start studying agian.
Fixed that by make an alert in the startTimer function on the third if function

6.After the 4th session i got 2 alerts one after the other.
I fixed that but moving some codes around and deleting some
