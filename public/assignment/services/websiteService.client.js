(function () {
    angular
        .module("WampApp")
        .service("websiteService", websiteService);

    function websiteService() {
        var websites = [
            { "id": "123", "name": "Facebook", "developerId": "123", "description": "Yo facebook" },
            { "id": "234", "name": "Tweeter", "developerId": "456", "description": "Yo Tweet" }
        ];

        this.findWebsitesForUser = findWebsitesForUser;

        function findWebsitesForUser(userId) {
            var sites = [];

            for (var w in websites) {
                if (websites[w].developerId === userId) {
                    sites.push(websites[w]); 
                }
            }
            return sites;
        }
    }
})();