[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/i6ROcniI)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12635660&assignment_repo_type=AssignmentRepo)
# The Plan For My Programming Project

<!-- USE THIS TEMPLATE TO PLAN YOUR PROJECT - REMEMBER TO "COMMIT" YOUR CHANGES TO THIS FILE! FEEL FREE TO CHANGE ANYTHING OR ADD ANY SECTIONS THAT YOU NEED TO HELP YOU TO PLAN THE PROJECT -->

<!-- INSTRUCTIONS: https://vuxcode.netlify.app/new/pr1/lessons/major-project-brief/ -->

## Idea

This is my program idea...

I have changed my project ide. I will now make a pomodoro timer for studying. Pomodoro is a studying technique that helps you study for persons that easily gets distracted by other things, works for all people

## Budget

This is how I will use my 30 hours on this project...

<!-- TRY TO BREAK YOUR IDEA DOWN INTO SMALLER PARTS AND GUESS HOW MUCH TIME EACH STEP WILL TAKE -->
First i need to make 4 things:
    1. Numbers for when the time starts ticking
    2. A start button to start the timer
    3. A pause button to pause the timer
    4. A reset button to reset the timer
After that i need to layout the structure for the page with HTML
Gonna need som divs and button tags on this page
Make the numbers of the timer big enough to clearly se it
Then last connect the buttons and the timer with JS
## Sketches

I've included some drawings in the repository for how I think the program will work.

![Timer](https://github.com/vuxcode/pr1-plan-PllanaEgzon/assets/104859080/fd16f59a-1e34-463a-96bb-b1ef7f91c01a)


## Potential Problem List

1. ???

<!-- WRITE A LIST OF PROBLEMS THAT YOU THINK YOU WILL HAVE TO TRY AND SOLVE DURING THE PROJECT -->
I will have some problems with centering everything, its been a long time doing HTML and CSS.
I centered the timer nummer and increase it's size for easy read.
Problems i encounterd were most of them were missing a letter and the most painful one was the buttons dubble activetet.
By that i mean that when i pressed the "Start" button the timer like stuterd while pressing it the second time, same with the other buttons.
I fixed that by useing the clearInterval function that stop multipel intervals running.
Another big problem i encounterd was that the output did update, when i pressed the button on the console.log it worked fine but not on the actual page.
I solved that problem by creating a function called updateTimer and changed the some variables to strings then used inneText to update the timer value.

## Promises

1. ???

<!-- WRITE A LIST OF PROMISES FOR WHAT THE USER WILL BE ABLE TO DO IN THE PROGRAM; BE OPEN AND HONEST! WHAT DO YOU THINK YOU CAN DO BEFORE THE DEADLINE -->
The timer will be an effective way of studying anything whith deep focus. You will feel good the amount of study that you did and also remembering alot.
You will be able to decrease procrastination and focus on one thing.
## The User Will Not Be Able To Do The Following Things With This program

1. ???

<!-- MAKE SUGGESTIONS FOR WHAT THE PROGRAM WILL NOT BE ABLE TO DO. WHAT MIGHT A USER EXPECT TO DO WITH YOUR PROGRAM THAT YOU DON'T THINK WILL BE POSSIBLE TO DO BEFORE THE DEADLINE. WRITE A CLEAR LIST OF THINGS -->
One thing the person might not be able to do is to set the amount of a longer rest. On the 4th go you will get an alert to take a bigger break but a timer would start.
That's up to the person to keep an eye on.
