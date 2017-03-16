(function() {
    function HomeCtrl($interval, $scope) {
        $scope.workState = "Start";
        $scope.totalTime = 1500; //time in seconds - 25 minutes
        
        $scope.timeState = function(workState){
            if (workState == "Start") {
                $scope.startTime();
            } else if (workState == "Reset") {
                $scope.resetTime();
            } 
        };
        
        //var stop;
        $scope.startTime = function() {
          //if ( angular.isDefined(stop) ) return;
                $scope.workState = "Reset";
                stop = $interval(function() {
                    if ($scope.totalTime > 0) {
                        $scope.totalTime = $scope.totalTime - 1;
                        console.log($scope.totalTime);
                    } else {
                        console.log("Done");
                        //this.stopTime();
                    }
                }, 1000, 1500);
            };
        
        $scope.resetTime = function() {
            $scope.workState = "Start";
            $scope.totalTime = 1500;
        };
        
     };
           
    angular
        .module('Bloctime')
        .controller('HomeCtrl', ['$interval', '$scope', HomeCtrl]);    
})();