# Node-Team-Generator

# Description

```
The Node Team Generator uses OOP to gather the general employee information about a working team.
In this project I utitlized my recent experience with bootstrap and generating an HTML file dynamically.
Learning the ins and outs of testing and directory organization was a challenge for me during this project.
I also struggled with downloading the correct versions of Jest and Inquirer, which were the required packages
for this project. In the end, I have a much deeper understanding of unit testing and what makes it valuable.
```

## Packages used

```
- inquirer v8.2.4
- jest v24
```

## Credits

```
My instructors Nicole and Bobby, UNH.
My classmate Carter and my tutor Andres Long, also through UNH, were a huge help during this project, from beginning to end.
```

## Video Walkthrough

https://drive.google.com/file/d/1JOg0S0qJ8bnCh1Vuzctn3zhT3chw_qt1/view

## Photo of completed HTML in a browser

![An image of the Node Team Generator in the browser after input is completed](./media/screenCapture.PNG?raw=true)

## User Story

```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
