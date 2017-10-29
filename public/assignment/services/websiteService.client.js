(function () {
    angular
        .module("WampApp")
        .service("websiteService", websiteService);

    function websiteService() {
        this.findWebsitesForUser = findWebsitesForUser;

        function findWebsitesForUser(userId) {
            var url = "/api/user/" + userId + "/website";
            $http.get(url);
        }
    }
})();