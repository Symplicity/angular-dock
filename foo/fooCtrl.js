(function(angular){

  var app = angular.module('app');
  
  
  app.controller('fooDockCtrl',function($scope){
    $scope.fooTitle = "FOO";
    $scope.newFoo = function(newFoo){
      alert(JSON.stringify(newFoo));
      $scope.closeDock();
    };
  });
  
  

  
})(angular);
