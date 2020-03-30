// const URL = `https://api.github.com/users/${username}`
// const starUrl = `https://api.github.com/users/${username}/starred`
const axios = require("axios")
const fs = require("fs")
const inquirer = require("inquirer")
const generateHtml = require("./generateHTML")

// async function data() {
//     function profilePrompt() {
//         let profileData =
//             inquirer
//                 .prompt([

//                     {
//                         type: "input",
//                         name: "username", //ANSWER
//                         message: "What is your GitHub username?",
//                     },

//                     {
//                         type: "list",
//                         name: "color", // ANSWER
//                         message: "What is your favorite color?",
//                         choices: [
//                             'green',
//                             'blue',
//                             'pink',
//                             'red'
//                         ],
//                     }

//                 ]).then(answers => {
//                     console.log("my answers worked", answers)
//                     return answers;
//                 })

//     }
//     profilePrompt();
//     let name = await profilePrompt.username
//     console.log("this is the name", name)
//     let color = await profilePrompt.color
//     console.log("this is the color choice", color)
//     await axios.get(URL).then(function (gitHubData) {
//         gitHubData.data.username = "name"
//         console.log("this is my username", gitHubData.data.username)
//         gitHubData.data.color = "color"
//         console.log("this is my color answer", gitHubData.data.color)
//         generateHtml(gitHubData.data)

//     })
// }
// data()
gitHubProfile();
async function gitHubProfile(data) {
    try {
        const { name } = await inquirer.prompt({
            type: "input",
            name: "name", //ANSWER
            message: "What is your name?"
        });
        // return name,??
        console.log("this is their name", name)
        const { username } = await inquirer.prompt({
            type: "input",
            name: "username", //ANSWER
            message: "What is your GitHub username?",
        });
        console.log("this is the username", username)
        const { color } = await inquirer.prompt({
            type: "list",
            name: "color", // ANSWER
            message: "What is your favorite color?",
            choices: [
                'green',
                'blue',
                'pink',
                'red'
            ]
        });
        // return color,
        console.log("this is the color picked", color)
        const { data } = await axios.get(
            `https://api.github.com/users/${username}`
        );
        console.log("this is the data from github", data);
        // const { starred } = await axios.get(
        //     `https://api.github.com/users/${username}/starred/{/owner}{/repo}`
        //     `https://api.github.com/users/${username}/starred/`
        // );
        // console.log("this is the starred", starred)
    } catch (err) {
        console.log(err);
    };
    return data.color = color,
        generateHtml(gitHubProfile)
}