(function() {
    function HomeCtrl($scope, Sessions, Alarm) { 
        $scope.sessions = Sessions;
        $scope.$watch('sessions.onBreak', function(newVal, oldVal) {
                if (newVal == !oldVal) {
                    Alarm.playDing();    
                }
            });
        
     };

           
angular
    .module('Bloctime')
    .controller('HomeCtrl', ['$scope', 'Sessions', 'Alarm', HomeCtrl]);    
})();