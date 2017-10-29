(function () {
    angular
        .module("WampApp")
        .service("websiteService", websiteService);

    function websiteService($http) {
        this.findWebsitesForUser = findWebsitesForUser;
        this.createWebsite = createWebsite;

        function findWebsitesForUser(userId) {
            var url = "/api/user/" + userId + "/website";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function createWebsite(userId, website) {
            var url = "/api/user/" + userId + "/website";
            return $http.post(url, website);
        }
    }
})();