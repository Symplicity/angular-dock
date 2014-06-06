(function(angular){

	var app = angular.module('app', ['dock-modal-directive', 'ngRoute']);

	app.config(['$routeProvider', function($routeProvider){

		return $routeProvider
		.when('/exemplo1', {
			templateUrl:'exemplo1.html',
			controller:'Exemplo1Ctrl'
		})
		.otherwise({
        	redirectTo: '/exemplo1'
        });
	}]);

})(angular);