(function() {
    function HomeCtrl($interval, $scope, WORKSESSION) {
        
        $scope.start_reset = "Start";
        $scope.onBreak = false;

        $scope.CurrentTotalTime = WORKSESSION.WORKTIME;
        $scope.ResetTotalTime = WORKSESSION.WORKTIME;

        $scope.completed_work_sessions = 0;
        
        
        
        $scope.timeState = function(start_reset){
            if (start_reset == "Start") {
                $scope.startTime();
            } else if (start_reset == "Reset") {
                $scope.resetStartTime($scope.ResetTotalTime);
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
                // Completed work session, start break session 
                if ($scope.onBreak == true) { 
                    $scope.completed_work_sessions += 1;
                    
                    if ($scope.completed_work_sessions%4 > 0) {
                        $scope.CurrentTotalTime = WORKSESSION.BREAKTIME_SHORT;
                        $scope.ResetTotalTime = WORKSESSION.BREAKTIME_SHORT;
                    } else {
                        $scope.CurrentTotalTime = WORKSESSION.BREAKTIME_LONG;
                        $scope.ResetTotalTime = WORKSESSION.BREAKTIME_LONG;
                    }
                    
                // Completed break session, start work session
                } else { 
                    $scope.CurrentTotalTime = WORKSESSION.WORKTIME;
                    $scope.ResetTotalTime = WORKSESSION.WORKTIME;
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