angular.module('ionicApp', [
				'templates',
				'ionic',
				'ionicApp.controllers'
])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('intro', {
		url: '/',
		templateUrl: 'templates/intro-template.html',
		controller: 'IntroCtrl'
	})
	.state('tabs', {
		url: "/tab",
		abstract: true,
		templateUrl: "templates/tabs-template.html"
	})
	.state('tabs.home', {
		url: "/home",
		views: {
			'home-tab': {
				templateUrl: "templates/home-template.html",
				controller: 'HomeTabCtrl'
			}
		}
	})
	.state('tabs.facts', {
		url: "/facts",
		views: {
			'home-tab': {
				templateUrl: "templates/facts-template.html"
			}
		}
	})
	.state('tabs.facts2', {
		url: "/facts2",
		views: {
			'home-tab': {
				templateUrl: "templates/facts2-template.html"
			}
		}
	})
	.state('tabs.about', {
		url: "/about",
		views: {
			'about-tab': {
				templateUrl: "templates/about-template.html"
			}
		}
	})
	.state('tabs.navstack', {
		url: "/navstack",
		views: {
			'about-tab': {
				templateUrl: "templates/nav-stack-template.html"
			}
		}
	})
	.state('tabs.contact', {
		url: "/contact",
		views: {
			'contact-tab': {
				templateUrl: "templates/contact-template.html"
			}
		}
	});

	$urlRouterProvider.otherwise("/");

});

angular.module('ionicApp.controllers', []);