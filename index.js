const httpInstance = require('http');
const fs = require("fs")
const express = require("express")
const port = 8080;
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post("/users", (req, res) => {
    const users = createNode({
        id: 11,
        first_name: "Lkhamjav",
        last_name: "sanjmytav",
        email: "the.lkhamjav@gmail.com",
        gender: "male",
        ip_address: "226.223.15.68"
    })
    res.send(users);
})
app.get("/users", (req, res) => {
    const users = readNode();
    res.send(users)
})

// Setup the server to listen on port 8080
const readNode = () => {
    const data = fs.readFileSync("./users.json", "utf-8")
    console.log("data", data);
    return JSON.parse(data)
}

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});