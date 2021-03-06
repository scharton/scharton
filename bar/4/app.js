(function(angular) {
	"use strict";
	var app = angular.module('site', []);
	
		app.directive('navBar', function() {
		return {
			//scope: { },
			
			restrict: 'E',
			
			//replace: true,
			
			templateUrl: '/templates/navbar.html'
		};
	});
	
	app.directive('cocktail', function() {
		return {
			restrict: 'E',
			templateUrl: '/bar/templates/cocktail.html'
		};
	});



	app.controller('ctlMain', function($scope, $http) {

		$http.get('bar.json').success(function(data) {
			$scope.recipe = data;			
		});

	});
	
})(window.angular);