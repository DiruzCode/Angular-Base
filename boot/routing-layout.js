/**
 * Angular UI-Routing
 */
angular.module('layout')

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    //SET Route Unique AND Layouts
   $stateProvider
    .state('default', {
      abstract: true,
      templateUrl: "layouts/default/layout.html",
      controller: "layout.default"
    });

}]);
