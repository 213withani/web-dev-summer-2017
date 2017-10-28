(function () {
    angular
        .module("WampApp")
        .factory("userService", userService);

    function userService($http) {
        var users = [
            { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", isAdmin: "true" },
            { _id: 234, username: "bob", password: "bob", firstName: "Bob", lastName: "Bob" },
        ];

        var api = {
            "findUserByUsernameAndPassword": findUserByUsernameAndPassword,
            "findUserById": findUserById,
            "registerUser": registerUser,
            "findUserByUsername": findUserByUsername,
            "updateUser": updateUser
        };

        return api;

        // params:value to be udpate, new value
        function updateUser(userId, user) {
            var url = "/api/user/"+userId;
            return $http.put(url,user);
        }

        function findUserByUsername(username) {
            var url = "/api/user?username=" + username;
            return $http.get(url);
            $http.post(url, user);
        }

        function registerUser(user) {
            var url = "/api/user";
            return $http.post(url, user);
        }

        function findUserById(userId) {
            return $http.get("/api/user/" + userId);
        }

        function findUserByUsernameAndPassword(username, password) {
            var url = "/api/user?username=" + username + "&password=" + password;
            return $http.get(url);
        }
    }
})();