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
	
	app.controller('ctlMain', function($scope, $http) {
/*
		$http.get('bar.json').success(function(data) {
			$scope.recipe = data;			
		});
*/
	});
	
})(window.angular);