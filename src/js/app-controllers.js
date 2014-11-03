angular.module('ionicApp.controllers')

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
	// Called to navigate to the main app
	$scope.startApp = function() {
		$state.go('tabs.home');
	};
	$scope.next = function() {
		$ionicSlideBoxDelegate.next();
	};
	$scope.previous = function() {
		$ionicSlideBoxDelegate.previous();
	};

	// Called each time the slide changes
	$scope.slideChanged = function(index) {
		$scope.slideIndex = index;
	};
})

.controller('HomeTabCtrl', function($scope) {
	console.log('HomeTabCtrl');
});