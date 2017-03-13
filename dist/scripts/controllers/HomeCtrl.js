(function() {
    function HomeCtrl() {
        this.pageTitle = "Its Bloctime!";
        
     };
           
    angular
        .module('Bloctime')
        .controller('HomeCtrl', HomeCtrl);    
})();