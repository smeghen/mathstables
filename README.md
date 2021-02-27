
# Milestone Project 2
---
## Purpose


This site was designed for the second milestone project in Full Stack Software Development with the Code Institute, based on the learnings from HTML, CSS and User Centric Design,  JavaScript Fundamentals and Interactive Frontend Development modules.

---

## Maths Tables

I decided to create a maths game aimed at primary school children and 
their parents, to aid in the learning of the basic mathematics of 
addition, subtraction, multiplication and division. The idea came to me 
while home-schooling my children during COVID-19 enforced lockdown. 
The aim is to turn the learning experience into a game so that children 
are distracted and are learning at the same time. The game is based on 
the 1 to 12 tables that are taught in schools, a selection of which 
number and type of arithmetic can be made with the game then provides 
questions based on the selection. 

---
### User Experience (UX)

#### User Stories:
*As a Site User:*
* I want to immediately understand the nature of the site and be able to easily navigate through the site.
* I want to be easily able to understand the rules of the game.
* I want to be easily able to make a selection of  the type of game to play.
* I want to know if my answer is correct or incorrect.
* I want to track my progress during the game.
* I want to be able to access the site from all device types.


## Structure:
The main aim of this game is to create a fun learning tool for children, that is easy to navigate and easy to use. It should be appealing to users, but not distracting to the overall learning experience that the game provides. With this in mind I have designed a simple site with only limited navigation options.

The Home page will have a  bright colourful image, with simple text explaining the purpose of the game. There will be two buttons below the text that will mirror the navigations items in the header. These will be for information and start games.

The Info for the game will appear as a modal over the home page. This will give the instructions on how to select a game and start it. It will also detail the different game selection options.

The Games/Start Games option will again be a modal over the home page. Within this there will be bootstrap accordion for selecting either addition, subtraction, multiplication or division. There will also be a dropdown menu for selecting the table number (1-12) that will be used for the game.

The Game page will have a simple layout with a bright background and the maths questions displayed in large clear fonts. An input box will be clearly labelled for the answer to be entered into. At the top of the page score for the game will be displayed. On input a modal will appear confirming a correct or incorrect answer. For an incorrect guess, the correct answer will also be displayed. For both modals there will be options to either continue playing or return to the Home page.


## Design:

Colour scheme: 

The colour scheme for the site consists of Yellow, Blue and Red. These were chosen as they are bright colours to catch the attention of children, but not too distracting that they pull a user from the game play. The text will be Black as it will stand out best against these colours.

Typography:

The main font used throughout the site is Pangolin, which has a handwritten look about it that is less formal that other typed fonts. Sans Serif is used as a fallback font.

Imagery:
 
The site logo I created using Free Logo Design (https://www.freelogodesign.org/)

The home page image was taken by Magda Ehlers and I obtained it from Pexels


Wireframes:

Here is the wireframes that I used as the basis of the design
for the site. These were created using Balsamiq.



 

### Differences to Design


### Features to be Implemented in Future



---
## Technologies Used
* HTML -  HTML is the main language used for the structure of the site.
* CSS - Custom written CSS is used to style the site.
* Bootstrap – The layout and styling of the site was help by the use of Bootstrap framework.
* Google Fonts -The font of Open Sans was imported from Google Fonts.
* Font Awesome – Was used to obtain the social media icons used.
* Balsamiq – Was used to create the wireframes of the site on the various devices.
* Adobe Photoshop Express - Used to resize images used on the site. https://www.adobe.com/ie/photoshop/online/resize-image.html
* Git - Git is used for the version control of changes throughout the project.
* GitPod – was used as the coding space for the project.
* Github - was used to host the project files and publish the live website by using Git Pages.
* Autoprefixer - was used to parse  CSS and add vendor prefixes to CSS rules via https://autoprefixer.github.io/
* W3 HTML Validation was done via https://validator.w3.org/
* W3 CSS Validation was done via https://jigsaw.w3.org/css-validator/
* Google Chrome DevTools – was used extensively during coding to check the responsiveness of the site with the addition of new features.
---
# Testing

--- 

# Deployment

##  GitHub Project Creation
To create the project the following steps were used:

* In GitHub repositories section click the green 'New' button 
* Select the Code Institute template
* Name the repository and give a brief description
* Set repository to 'Public' to ensure the commit history is visible
* Click 'Create repository'

## Deploy with GitHub Pages
The website was deployed as follows:

* Open the repository in GitHub
* Navigate to the 'Settings' tab
* Scroll down to 'GitHub Pages' section
* Select 'Branch Master' as the source
* Click the save button
* Click on the link to go to the live deployed page


## Run Locally
To run the code locally:

* Navigate to the repository
* Click the 'Code' drop down menu
* Select to copy the GitHub URL from HTTPS box or 'Download Zip'
* Open a new terminal and type 'git clone' command in the CLI and paste copied URL
* Alternatively, click 'Open with GitHub Desktop' and follow the steps to complete the clone
---
# Issues Encountered

* Came across a problem with my displayRandomNumber() function: 


 

function displayRandomNumber() { 

    let choice = document.getElementById("selectedType"); 

    let numChoice = document.getElementById("selectedNumber");  

    if (choice === "Addtion" || "Multiplication"){ 

    let firstNum = parseInt(Math.random() * 12) + 1; 

    document.getElementById("operand1").textContent = firstNum; 

    } else if(choice === "Subtraction"){ 

    let firstNum = parseInt(Math.random() * 12) + numChoice;   

    document.getElementById("operand1").textContent = firstNum; 

    } else if(choice === "Division"){ 

    let firstNum = parseInt(Math.random() * 12) * numChoice;  

    document.getElementById("operand1").textContent = firstNum; 

    } 

    }  

The first if statement was being confirmed true for all selections and returning the random number range of 1 to 12. Using chrome dev tools I was able to find that the variable of choice was not being defined correctly so it could not be used correctly in the if else statement. This was fixed by changing the variable declaration to: 

 

    let choice = document.getElementById("selectedType").value; 

Another issue with this function was the variable numChoice, when checking on devtools, found that it was a string and would not then work in the formula. This was overcome by converting it to a number using the function Number(). 



 

 Encountered an issue with the Subtraction equations. During some testing found that the random number generation would throw out a 0 from time to time. As you can’t divide 0 by a number and it is not part of the division tables this is technically an error in the game. I figured out that the problem was with my formula: 

    if(choice === "Division"){ 

    let firstNum = parseInt(Math.random() * 12) * numChoice;  

    document.getElementById("operand1").textContent = firstNum; 

    } 

This formula allows 0 to be picked and multiplying 0 by the numChoice will still return 0. Overcame this issue by adding a check on the random number being provided. If it is 0, the numChoice as the random number, which is the equivalent to adding 1 to the random number, as done for the other equations to keep the number range from 1 to 12. 

---

# Credits



---

# Acknowledgments

* My Mentor, Gurjot Singh, for his feedback and support throughout the project.

* The Slack community for their support, encouragement and assistance in finding answers 
to my project problems.