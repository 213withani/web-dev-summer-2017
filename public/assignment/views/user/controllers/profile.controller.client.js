(function () {
    // Bind the HTML. Declare a variable to be reused.
    // Binding the view with the controller: 
    // View notify the controller of its events.
    angular.module("WampApp")
        .controller("profileController", profileController);

    function profileController($scope, $routeParams, userService) {
        var model = this;

        var userId = $routeParams.userId;

        model.updateUser = updateUser;
        model.unregister = unregister;

        function init() {
            var promise = userService.findUserById(userId);
            promise.then(function (response) {
                model.user = response.data;
            });
        }
        init();
    }

    function updateUser(user) {
        userService.updateUser(user._id, user);
    }

    function unregister() {

    }
})();   