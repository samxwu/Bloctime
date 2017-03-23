(function() {
  function Tasks($firebaseArray) {
    
      var Tasks = {}
      
      var ref = firebase.database().ref("tasks");
      var tasks = $firebaseArray(ref);
      
            
      Tasks.all = tasks;
      Tasks.newTask = null;
      
      Tasks.addTask = function(childName, value){
          ref.child(childName).set(value);
          Tasks.newTask = null;
      };
      
      
      return Tasks;
      
      
  }

  angular
    .module('Bloctime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();