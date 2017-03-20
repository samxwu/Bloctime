(function() {
    function config($stateProvider, $locationProvider) {
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
         $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: '/templates/home.html'
            });
          
    }

    
angular
    .module('Bloctime', ['firebase', 'ui.router', 'ui.bootstrap'])
    .constant('WORKSESSION', {
        'WORKTIME': 1500,
        'BREAKTIME_SHORT': 300,
        'BREAKTIME_LONG': 1500
    })
    .config(config);
    
})();
