# portfoliogenerator
My Coffee Finder

Overview

The Portfolio Generator is a great tool to use as an employer. All you need for your perspective employee developer is to provide you with their name, GitHub username, and color preference. Using the CLI of the terminal it will make a PDF version and links to their GitHub stats for potential employment. 

Gallery

file:///Users/jordanhanson/Developer/uofu/sandbox/Homework/portfoliogenerator/resume.html


Solution

My portfolio generator will save time for optimal employer hiring stats on potential employees.

Tech and Features Used

Javascript
GitHub API
Node

How to use

Instrunctions:
Step One: Launch the website in your terminal and launch the CLI components.
Step Two: Answer the prompt questions
Step Three: Save PDF file that was automatically made to approperiate files for personal use.

Technical Overview

The main component is the generatehtml that holds all the information passed from my index.js functions.
The Index.JS file writes the prompt questions in ASYNC and await order then uses the data and passes it to my generateHtml.
The generatehtml holds the template and CSS for the Jquery plugins, and at the bottom it runs the FS require function to write a html and pdf version.

Link to example readme: https://github.com/jordan-hanson/portfoliogenerator
