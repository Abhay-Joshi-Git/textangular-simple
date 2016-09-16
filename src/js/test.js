angular.module('app')
    .controller('test', function($scope) {
		$scope.testfun = function() {
			console.log('in test');
		}
	});