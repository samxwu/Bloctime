(function() {
     function Alarm() {
         var Alarm = {};
         
         //Play ding 
         var currentBuzzObject = null;
         Alarm.playDing = function(){
             currentBuzzObject = new buzz.sound('/assets/music/DingLing', {
                 formats: ['mp3'],
                 preload: true
             });

             currentBuzzObject.setVolume(8);
             currentBuzzObject.play();
         }

         return Alarm;
     }
 
     angular
         .module('Bloctime')
         .factory('Alarm', Alarm);
 })();