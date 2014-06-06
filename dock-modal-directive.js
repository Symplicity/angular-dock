
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

				var config = $scope.ngDockConfig;

				config.close = function( event, dialog ) {
					iElement.hide();
				};

				iElement.hide();

				button.click(function(){
					iElement.dockmodal(config);	
					iElement.show();
				});
			},

			controller: ['$scope', function($scope) {


    		}],
		}
	});


})(angular);