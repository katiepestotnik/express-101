const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log("Oh hey! I got a request. Let me respond with something");
    res.send("hihi")
    // res.send(`
    // <h1>hihi</h1>
    // <b>THIS IS IN THE RES.SEND YAYA </b>
    // `) //can send interpolated html
})

app.get("/somedata", (req, res) => {
    console.log(req)
    res.send("heres your info :)")
})

app.get("/jammy", (req, res) => {
    res.send('Grape, Raspberry, Strawberry, YUM!')
})

app.listen(3000, () => {
    console.log("Smooth sailing on port 3000")
})

// Want to run this? You need to install the dependencies from the package.json! 

// `npm i` will install everything you need from the json file, generating the node_modules and package-lock.json