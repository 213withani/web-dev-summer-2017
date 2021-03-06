(function () {
    var app = require("../express");

    app.get("/api/user/:userId/website", findWebsitesForUser);
    app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
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
        res.send(sites);
    }

    function createWebsite(req, res) {
        var website = req.body;
        var userId = req.params.userId;
        website.developerId = userId;
        website._id = (new Date().getTime()) + "";

        websites.push(website);
        res.json(website);
    }

    function findWebsiteById(req, res) {
        for (var w in websites) {
            if (websites[w]._id === userId) {
                res.json(websites[w]);
            }
        }
        res.sendStatus(404);
    }

})();