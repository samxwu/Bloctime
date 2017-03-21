(function() {
     function Sessions($interval, WORKSESSION) {
        var Sessions = {};
         
        Sessions.start_reset = "Start";
        Sessions.onBreak = false;

        Sessions.CurrentTotalTime = WORKSESSION.WORKTIME;
        Sessions.ResetTotalTime = WORKSESSION.WORKTIME;

        Sessions.completed_work_sessions = 0;
        
        
        
        Sessions.timeState = function(start_reset){
            if (start_reset == "Start") {
                startTime();
            } else if (start_reset == "Reset") {
                resetStartTime(Sessions.ResetTotalTime);
                startTime();
            }
        };
        

        var stop;
        var startTime = function() {
          if ( angular.isDefined(stop) ) return;
          
          Sessions.start_reset = "Reset";
          stop = $interval(function() {
            if (Sessions.CurrentTotalTime > 0) {
              Sessions.CurrentTotalTime = Sessions.CurrentTotalTime - 1;
            } else {
              Sessions.onBreak = !Sessions.onBreak;
              Sessions.start_reset = "Start";
                // Completed work session, start break session 
                if (Sessions.onBreak == true) { 
                    Sessions.completed_work_sessions += 1;
                    
                    if (Sessions.completed_work_sessions%4 > 0) {
                        Sessions.CurrentTotalTime = WORKSESSION.BREAKTIME_SHORT;
                        Sessions.ResetTotalTime = WORKSESSION.BREAKTIME_SHORT;
                    } else {
                        Sessions.CurrentTotalTime = WORKSESSION.BREAKTIME_LONG;
                        Sessions.ResetTotalTime = WORKSESSION.BREAKTIME_LONG;
                    }
                    
                // Completed break session, start work session
                } else { 
                    Sessions.CurrentTotalTime = WORKSESSION.WORKTIME;
                    Sessions.ResetTotalTime = WORKSESSION.WORKTIME;
                };
              stopStartTime();
            }
          }, 1000);
        };

        
        
        var stopStartTime = function() {
          if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
          }
        };

        
        
        var resetStartTime = function(totalTime) {
            Sessions.start_reset = "Reset";
            Sessions.CurrentTotalTime = totalTime;
        };

        
        
        
         
         
         
         return Sessions;
     }
 
     angular
         .module('Bloctime')
         .factory('Sessions', ['$interval', 'WORKSESSION', Sessions]);
 })();