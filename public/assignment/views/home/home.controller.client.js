(function () {
    angular
        .module("WampApp")
        .controller("homeController", homeController);

    function homeController() {
        console.log("inside homeController");
        var model=this;
        function init() {
            
        }
        init()
    }
})();