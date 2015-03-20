(function(angular){

  var app = angular.module('app');
  
  

  app.factory('dockService', function(){
    var randId = function(){
      var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      return randLetter + Date.now();
    };
    return  {
      docks: [],
      addDock: function(template, data){
        var data = data || {};
        data.template = template;
        data.id = randId();
        this.docks.push(data);
      },
      removeDock: function(id){
        for (var k=0; k<this.docks.length; ++k){
          if (this.docks[k].id == id){
            this.docks.splice(k, 1);
            return;
          }
        }
      }
    }
  });

})(angular);
