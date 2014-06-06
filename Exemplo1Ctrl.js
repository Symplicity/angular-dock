(function(angular){

	var app = angular.module('app');

	app.controller('Exemplo1Ctrl',function($scope){


		$scope.configDock = {
	    	initialState: "docked", 
	    	width: 320,
    		minimizedWidth: 300,
    		height: 480,
    		title: "Tamanho 320 x 480"
		};


	});

})(angular);