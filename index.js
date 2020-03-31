// const URL = `https://api.github.com/users/${username}`
// const starUrl = `https://api.github.com/users/${username}/starred`
const axios = require("axios")
const inquirer = require("inquirer")
const generateHtml = require("./generateHTML")


gitHubProfile();
async function gitHubProfile() {
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
        })

        console.log('all three awaits', color, username, name)

        //     .then(function (({ name }), ({ username }), ({ color })) {
        const queryUrl = `https://api.github.com/users/${username}`;
        console.log("this is the username", username)
        console.log("this is the name", name)
        console.log("this is the color", color)
        console.log("this is the api link pass", queryUrl)
        axios.get(queryUrl).then(function (data) {
            console.log('gh data!!', data)
            var githubData = data.data
            githubData.color = color
            githubData.name = name
            console.log('DO we have the color here ??', color)
            axios.get(
                `https://api.github.com/users/${username}/starred`
            ).then(function (starData) {
                console.log('Testing the Stars!!', starData.data.length)
                githubData.starCount = starData.data.length

                generateHtml(githubData)
            })


        })
    } catch (err) {
        console.log(err);
    };
    // generateHtml(profile)
}