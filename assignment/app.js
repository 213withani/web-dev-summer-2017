var app = require('../express');

var users = [
    { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", isAdmin: "true" },
    { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Bob" },
];

// api token meant to return dynamic data, 
// user won't create directory api and adding files there causing confuscius
app.get('/', function (req, res) {
    res.send("Welcome to root");
})

app.get('/api/users', getAllUsers)
app.get('/api/user/:userId', getUserById)
app.get('/api/user', findUserByUsernameAndPassword);

function findUserByUsernameAndPassword(req, res) {
    var username = req.query.username;
    var password = req.query.password;

    for (var u in users) {
        var _user = users[u];

        if (_user.username === username && _user.password === password) {
            res.send(_user);
            return;
        }
    }
    res.send("0");
}

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
