(function () {
    angular
        .module("WampApp")
        .controller("websiteListController", websiteListController);

    function websiteListController($routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;
        var websites = [
            { "id": "123", "name": "Facebook", "developerId": "456", "description": "Yo facebook" },
            { "id": "234", "name": "Tweeter", "developerId": "456", "description": "Yo Tweet" }
        ];

        function init() {
            websiteService
                .findWebsitesForUser(model.userId)
                .then(
                function (websites) {
                    model.websites = websites;
                }
                );
        }
        init();
    }
})();