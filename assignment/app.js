var app = require("../express");

var websites = [
    { "id": "123", "name": "Facebook", "developerId": "123", "description": "Yo facebook" },
    { "id": "234", "name": "Tweeter", "developerId": "456", "description": "Yo Tweet" }
];

app.get("/users", function (req, response) {
    response.send(users);
});