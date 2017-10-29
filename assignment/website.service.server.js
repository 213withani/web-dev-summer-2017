(function () {
    var app = require("../express");

    app.get("/api/user/:userId/website", findWebsitesForUser);
    app.post("/api/user/:userId/website", createWebsite);

    var websites = [
        { "id": "123", "name": "Facebook", "developerId": "123", "description": "Yo facebook" },
        { "id": "234", "name": "Tweeter", "developerId": "456", "description": "Yo Tweet" }
    ];

    function findWebsitesForUser(req, res) {
        var userId = req.params.userId;
        var sites = [];

        for (var w in websites) {
            if (websites[w].developerId === userId) {
                sites.push(websites[w]);
            }
        }
        res.json(sites);
    }

    function createWebsite(req, res) {
        var website = req.body;
        var userId = req.params.userId;
        website.developerId = userId;
        website._id = (new Date().getTime()) + "";

        websites.push(website);
        res.json(website);
    }
})();