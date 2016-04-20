angular.module('layout')

.controller("layout.default", function layoutDefault($scope, $rootScope) {
    $scope.model = {

        menu: [
        {
            picture: "angular-logo.png",
            label: "Inicio",
            url: "default.home"
        }]

    };
});
