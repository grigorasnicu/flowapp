'use strict';

angular.module('bdApp')
    .controller('IndexController', ['$scope', function ($scope) {
        $scope.message = "Main Page";
    }])

    .controller('SignupController', ['$scope', function ($scope) {
        $scope.message = "SignUp Page";
        $scope.message = {'firstName': '', 'lastName': '', 'email': '', 'username': '', 'password': ""};
        $scope.formError = {'firstName': true, 'lastName': true, 'email': true, 'username': true, 'password': true ,'isError': true};

        $scope.doSignup = function () {
            console.log($scope.message);

            var jMessage = JSON.stringify($scope.message);
            // $scope.serverFormFeedback.$setPristine();

            console.log(typeof jMessage);

            //    Send file to the node server \
            $http({
                url: sendMessageURL,
                method: "POST",
                data: jMessage,
                headers: {'Content-Type': 'application/json'}
            })
                .then(function mySuccess(response) {
                    $scope.serverResponse = response.data;

                    // for(var i in $scope.serverResponse){
                    //     $scope.formError[i] = $scope.serverResponse[i];
                    // }

                    $scope.formError = $scope.serverResponse;

                    $scope.serverFormFeedback = response.data;


                }, function myError(response) {
                    $scope.serverResponse = response.statusText;
                });
        }
    }])

    .controller("LoginController", ['$scope', function ($scope) {
        $scope.message = "LogIn page";
        $scope.message = {'username': '', 'password': ""};
        $scope.formError = {'username': true, 'password': true ,'isError': true};

        $scope.doLogin = function () {
            console.log($scope.message);

            var jMessage = JSON.stringify($scope.message);
            // $scope.serverFormFeedback.$setPristine();

            console.log(typeof jMessage);

            //    Send file to the node server \
            $http({
                url: sendMessageURL,
                method: "POST",
                data: jMessage,
                headers: {'Content-Type': 'application/json'}
            })
                .then(function mySuccess(response) {
                    $scope.serverResponse = response.data;

                    // for(var i in $scope.serverResponse){
                    //     $scope.formError[i] = $scope.serverResponse[i];
                    // }

                    $scope.formError = $scope.serverResponse;

                    $scope.serverFormFeedback = response.data;


                }, function myError(response) {
                    $scope.serverResponse = response.statusText;
                });
        }
    }])

;