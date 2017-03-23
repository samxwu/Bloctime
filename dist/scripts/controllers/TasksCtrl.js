(function() {
    function TasksCtrl($scope, Tasks) { 
        $scope.tasks = Tasks;
        
        $scope.openNav = function() {
            document.getElementById("mySidenav").style.width = "30%";
            document.getElementById("main").style.marginLeft = "30%";
            document.getElementById("session-section").style.left= "70%";
        }

        $scope.closeNav = function() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
            document.getElementById("session-section").style.left= "50%";
        }
        
     };

           
angular
    .module('Bloctime')
    .controller('TasksCtrl', ['$scope', 'Tasks', TasksCtrl]);    
})();