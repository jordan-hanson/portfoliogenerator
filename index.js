var URL = `https://api.github.com/users/${"jordan-hanson"}?client_id=f5285491670655d3954f&client_secret=o913d6b039b0bf45a4c004f2e61726dec4d3c9db1`
var axios = require("axios")
var fs = require("fs")
var inquirer = require("inquirer")
var generateHtml = require("./generateHTML")

axios.get(URL).then(function (gitHubData) {
    console.log(gitHubData.data)
    gitHubData.data.color = "pink"
    generateHtml(gitHubData.data)

})
