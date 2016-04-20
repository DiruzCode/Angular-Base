angular.module('config', [])
.constant('config', {
	developerMode: true,
	appName: "App",
	appVersion: "1.0",
	module : ['my module'],
	host : 'http://localhost:',
	port : '8000',
	api : 'http://localhost:8000'
});
