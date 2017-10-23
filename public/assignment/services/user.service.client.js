(function () {
    angular
        .module("WampApp")
        .factory("userService", userService);

    function userService() {
        var users = [
            { _id: 123, username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", isAdmin:"true" },
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
        function updateUser(userId,user) {
            for (var u in users) {
                //type coercion between number and string
                if (users[u]._id === userId) {
                    users[u]=user;
                    return;
                }
            }
            return null;
        }
        function findUserByUsername(username) {
            for (var u in users) {
                //type coercion between number and string
                if (users[u].username === username) {
                    return users[u];
                }
            }
            return null;
        }

        function registerUser(user) {
            user._id = (new Date()).getTime() + "";
            users.push(user);
            return user;
        }

        function findUserById(userId) {
            for (var u in users) {
                //type coercion between number and string
                if (users[u]._id == userId) {
                    return users[u];
                }
            }
            return null;
        }

        function findUserByUsernameAndPassword(username, password) {
            for (var u in users) {
                var _user = users[u];

                if (_user.username === username && _user.password === password) {
                    return _user;
                }
            }
            return null;
        }
    }
})();