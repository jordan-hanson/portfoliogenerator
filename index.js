var URL = `https://api.github.com/users/${"jordan-hanson"}?client_id=f5285491670655d3954f&client_secret=o913d6b039b0bf45a4c004f2e61726dec4d3c9db1`
var axios = require("axios")
var fs = require("fs")
axios.get(URL).then(function (gitHubData) {
    console.log(gitHubData.data)
    var HTML =
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${gitHubData.data.login}</h1>
    </body>
    </html>`

    fs.writeFile("portfolio.html", HTML, function (error) {
        console.log(error)
    })
})
