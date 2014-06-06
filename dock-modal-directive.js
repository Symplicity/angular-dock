
(function(angular){
	var Directive = angular.module('dock-modal-directive', []);
	Directive.directive('ngDock', function() {
		return {
			restrict: 'A',
			scope: {
				ngDockConfig: "=",
				ngDockButton: "="
			}	,
			link: function($scope, iElement, iAttrs) {

				var button = $("#" + $scope.ngDockButton);

				button.click(function(){
					iElement.dockmodal($scope.ngDockConfig);	
				});
			},

			controller: ['$scope', function($scope) {


    		}],
		}
	});


})(angular);