// const URL = `https://api.github.com/users/${"jordan-hanson"}?client_id=f5285491670655d3954f&client_secret=o913d6b039b0bf45a4c004f2e61726dec4d3c9db1`
const axios = require("axios")
const fs = require("fs")
const inquirer = require("inquirer")
// const generateHtml = require("./generateHTML")

// axios.get(URL).then(function (gitHubData) {
//     console.log(gitHubData.data)
//     gitHubData.data.color = "pink"
//     generateHtml(gitHubData.data)

// })
async function data() {
    const profileData = await
        inquirer
            .prompt([

                {
                    type: "input",
                    name: "username",
                    message: "What is your GitHub username?",
                },

                {
                    type: "list",
                    name: "color",
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
data();



