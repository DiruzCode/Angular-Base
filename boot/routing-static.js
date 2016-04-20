/**
 * Angular UI-Routing
 */
angular.module('layout')

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    //SET Route Unique AND Layouts
   $stateProvider
    .state('default.home', {
      url: '/home',
      templateUrl: 'modules/home/views/index.html',
      controller: 'home.index'
    });

}]);
