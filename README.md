# Matcha

A dating site that allows users to connect with others based on romantic preference/interests and geo location.

## Requirements

- npm v6.13.4 : https://www.npmjs.com/get-npm
- Node v12.16.1 : https://nodejs.org/en/download/
- MAMP : https://bitnami.com/stack/mamp

## Installation

### How to download the source code

- Navigate to https://github.com/sgigaba/matcha.git, click on clone or download

- Once you have downloaded the source code navigate to the folder Matcha
- run npm install to install all of the modules needed for this project

### How to set up and configure the database

- Download MAMP from the bitnami website
- Open the manager-osx. Go to the Manage servers tabs and make sure mysql database is running. If not press Restart.
- Press configure, this should show details about the port.
- Open a web browser and go to http://localhost:(the port)/phpmyadmin
- Create the database titled matcha, navigate to import and upload the file matcha.sql
- Create a database titled profile, navigate to import and upload the file profile.sql

### How to run the program

- run node entry to start the server
- navigate to localhost:3000 in your browser to open the website

## Code Breakdown
- Back end technologies
    - node.js
    - express

- Front-end technologies
    - handlebars
    - bootstrap

- libraries/modules/dependencies
    - body-parser
    - express-session

- Database management systems
    - mysql
    - phpmyadmin

- Break down of app folder structure
    - views
        - layouts 
            - main.handlebars
                * This is where the overall structure of all of the views is defined including html tags, bootstrap configuration and any javascript files.
        - partials
            - head.handlebars
            - nav.handlebars
                * This contains the structure of the nav bar which is consistent throughout application.
    - routes 
        - block.js
        - chatr.js
        - confirm.js
        - custom.js
        - customdist.js
        - deets.js
        - deleted.js
        - forgot.js
        - history.js
        - home.js
        - login.js
        - signup.js
        - notifications.js
