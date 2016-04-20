/**
 * Angular UI-Routing
 */
angular.module('layout')

.config(['$stateProvider', '$urlRouterProvider', 'config', function ($stateProvider, $urlRouterProvider, config) {

    //Init Creating Routes


    var aryProvider = config.module;
    var method = '';
    var controller = '';
    var url = '';
    var templateUrl = '';
    var provider = '';
    var view = '';
    var aryMethod = [];
    
    //Add All Provider

    angular.forEach(aryProvider, function(provider) {

        //Add Method form you Provider
        aryMethod = [provider, provider+'Edit', provider+'Create', provider+'Detail'];


        angular.forEach(aryMethod, function(method) {

            //Set url,controller and view form you Route
            switch (method) {
                case provider:
                    url = '/' + method;
                    controller = provider + '.index';
                    view = 'index.html';
                    break;
                case provider + 'Edit':
                    url = '/' + provider + '/:id';
                    controller = provider + '.edit';
                    view = 'form.html';
                    break;
                case provider + 'Create':
                    url = '/' + provider + '/create';
                    controller = provider + '.create';
                    view = 'form.html';
                    break;
                case provider + 'Detail':
                    url = '/' + provider + '/detail/:id';
                    controller = provider + '.detail';
                    view = 'detail.html';
                    break;
            }

            //Create Route
            $stateProvider.state('default.' + method, {
                url: url,
                templateUrl: 'modules/' + provider + '/views/' + view + '',
                controller: controller
            });
        });

    });

    $urlRouterProvider.otherwise('/home');
}]);