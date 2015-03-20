
(function(angular){
  angular.module('dock-modal-directive', [])
  .directive('dock', function ($compile, dockService) {
    return {
      restrict: 'A',
      scope: {
        dock: "="
      },
      link: function($scope, iElement, iAttrs) {
        var ele = iElement[0];
        
        ele.id = $scope.dock.id;
        
        $scope.getContentUrl = function(){
          return $scope.dock.template;
        };
        
        $scope.closeDock = function(){
          $(ele).dockmodal("close");
        };
        
        var config = {
          initialState: "docked",
          width: 290,
          minimizedWidth: 290,
          height: 385,
          showPopout: false,
          showClose: true,
          showMinimize: true,
          title: ' ',
          close: function(e){
            var dockId = e.context.id;
            $scope.$apply(function(){
              dockService.removeDock(dockId);
            });
          }
        };
        
        $(ele).dockmodal(config);
      },
      
      template: '<div ng-include="getContentUrl()"></div>',
    }
  });


})(angular);
