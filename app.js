/**
* Configure app
*/

angular.module('layout', [
	'ui.router',
	'config'
]);

/**
 * Initialize components
 */
angular.module('ngEnter', []);

/**
 * Define "app" module and inject all other components and services as dependencies
 */
angular.module('app', [
	'config',
	'layout',
	'ngEnter',
	'apiService',
])

/**
 * Main controller
 */
.controller("main.controller", function mainController() {

})

; //EOF
