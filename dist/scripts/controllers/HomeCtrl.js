(function() {
    function HomeCtrl($scope, Sessions, Alarm) { 
        $scope.sessions = Sessions;
        $scope.$watch('sessions.onBreak', function(newVal, oldVal) {
                if (newVal == !oldVal) {
                    Alarm.playDing();    
                }
            });
        
        
        
        $scope.openNav = function() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        }

        $scope.closeNav = function() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        }
        
        
        
        
     };

           
angular
    .module('Bloctime')
    .controller('HomeCtrl', ['$scope', 'Sessions', 'Alarm', HomeCtrl]);    
})();