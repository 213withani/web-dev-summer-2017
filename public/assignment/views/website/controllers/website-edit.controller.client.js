(function () {
    angular
        .module("WampApp")
        .controller("websiteEditController", websiteEditController);

    function websiteEditController($location, $routeParams, websiteService) {
        var model = this;
        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;

        function init() {
            websiteService
                .findWebsitesForUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                });
            websiteService
                .findWebsitesById(model.userId, model.websiteId)
                .then(function (website) {
                    model.website = website; // pass website for rendering
                });
        }
        init();
    }
})();