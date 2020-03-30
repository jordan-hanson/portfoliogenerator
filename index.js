const URL = `https://api.github.com/users/${"username"}`
const starUrl = `https://api.github.com/users/${"username"}/starred`
const axios = require("axios")
const fs = require("fs")
const inquirer = require("inquirer")
const generateHtml = require("./generateHTML")

async function data() {
    function profilePrompt() {
        let profileData =
            inquirer
                .prompt([

                    {
                        type: "input",
                        name: "username", //ANSWER
                        message: "What is your GitHub username?",
                    },

                    {
                        type: "list",
                        name: "color", // ANSWER
                        message: "What is your favorite color?",
                        choices: [
                            'green',
                            'blue',
                            'pink',
                            'red'
                        ]
                    }

                ]).then(answers => {
                    console.log("my answers worked", answers)
                })

    }
    profilePrompt();
    let name = await profilePrompt.username
    console.log("this is the name", name)
    let color = await profilePrompt.color
    console.log("this is the color choice", color)
    // await axios.get(URL).then(function (gitHubData) {
    //     console.log(gitHubData.data)
    //     // gitHubData.data.color = "color"
    //     generateHtml(gitHubData.data)

}
data();
//

// THIS CODE WORKS AND WILL PROMPT THE USER BUT DOESNT UPDATE GENERATE HTML
// async function data() {
//     const profileData = await
//         inquirer
//             .prompt([

//                 {
//                     type: "input",
//                     name: "username",
//                     message: "What is your GitHub username?",
//                 },

//                 {
//                     type: "list",
//                     name: "color",
//                     message: "What is your favorite color?",
//                     choices: [
//                         'green',
//                         'blue',
//                         'pink',
//                         'red'
//                     ]
//                 }

//             ]).then(answers => {
//                 console.log("my answers worked", answers)
//             })
// }
// data();

// function name() {
//     let name = inquirer
//         .prompt(
//             {
//                 type: "input",
//                 name: "Name",
//                 message: "What is your first and last name?",
//             })
//     return name
// }
// // console.log("this is the name", name)


// function color() {
//     let color = inquirer
//         .prompt(
//             {
//                 type: "list",
//                 name: "color",
//                 message: "What is your favorite color?",
//                 choices: [
//                     'green',
//                     'blue',
//                     'pink',
//                     'red']

//             })
//     return color
// }
// // console.log("this is the color", color)

// name((console.log("this is the name", name)));
// color((console.log("this is the color", color)));
