(function() {
    function HomeCtrl($interval, $scope, WORKSESSION) {
        
        $scope.start_reset = "Start";
        $scope.onBreak = false;
        $scope.CurrentTotalTime = WORKSESSION.WORKTIME;
        
        
        $scope.timeState = function(start_reset){
            if (start_reset == "Start" && $scope.onBreak == false) {
                $scope.CurrentTotalTime = WORKSESSION.WORKTIME;
                $scope.startTime();
            } else if (start_reset == "Reset" && $scope.onBreak == false) {
                $scope.resetStartTime(WORKSESSION.WORKTIME);
                $scope.startTime();
            } else if (start_reset == "Start" && $scope.onBreak == true) {
                $scope.CurrentTotalTime = WORKSESSION.BREAKTIME;
                $scope.startTime();
            } else if (start_reset == "Reset" && $scope.onBreak == true) {
                $scope.resetStartTime(WORKSESSION.BREAKTIME);
                $scope.startTime();
            }
        };
        

        var stop;
        $scope.startTime = function() {
          if ( angular.isDefined(stop) ) return;
          
          $scope.start_reset = "Reset";
          stop = $interval(function() {
            if ($scope.CurrentTotalTime > 0) {
              $scope.CurrentTotalTime = $scope.CurrentTotalTime - 1;
            } else {
              $scope.onBreak = !$scope.onBreak;
              $scope.start_reset = "Start";    
                if ($scope.onBreak == true) { 
                    $scope.CurrentTotalTime = WORKSESSION.BREAKTIME; 
                } else { 
                    $scope.CurrentTotalTime = WORKSESSION.WORKTIME;
                };
              $scope.stopStartTime();
            }
          }, 1000);
        };

        $scope.stopStartTime = function() {
          if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
          }
        };

        $scope.resetStartTime = function(totalTime) {
            $scope.start_reset = "Reset";
            $scope.CurrentTotalTime = totalTime;
        };

        /*
        $scope.$on('$destroy', function() {
          // Make sure that the interval is destroyed too
          $scope.stopTotalTime();
        });
        */
        
        
     };

           
angular
    .module('Bloctime')
    .controller('HomeCtrl', ['$interval', '$scope', 'WORKSESSION', HomeCtrl]);    
})();
