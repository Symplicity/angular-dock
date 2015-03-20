(function(angular){

  var app = angular.module('app', ['dock-modal-directive']);


  app.controller('mainCtrl', function($rootScope, dockService){
    $rootScope.dockService = dockService;
  });
  
  
  
})(angular);
