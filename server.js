const express = require('express')
const app = express()

var users = [
    { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", isAdmin: "true" },
    { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Bob" },
];

app.get('/users', getAllUsers)

app.get('/user/:userId', getUserById)

function getUserById(req, res) {
    for (var u in users) {

        if (users[u]._id == req.params.userId) {
            res.send(users[u])

        }
    }

}

function getAllUsers(req, res) {
    res.send(users)
}

// require("./assignment/app");

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})