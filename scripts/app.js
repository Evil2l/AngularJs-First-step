// This'll start angular module with all it's features
angular.module("ngStart",["ngMaterial"])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('altTheme')
            .primaryPalette('purple')
    })
    .directive('homeWorld', function(){
        return {
            template: "<h1>Hello folks</h1>"
        }
    });
