'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('videoseries', {
			url: '/videoseries/:seriesname',
			templateUrl: 'modules/core/views/videoseries.client.view.html'
		}).
		state('dictionary', {
			url: '/dictionary',
			templateUrl: 'modules/core/views/dictionary.client.view.html'
		}).
		state('template', {
			url: '/template',
			templateUrl: 'modules/core/views/template.client.view.html'
		}).
		state('checklist', {
			url: '/checklist',
			templateUrl: 'modules/core/views/checklist.client.view.html'
		}).
		state('contact', {
			url: '/contact',
			templateUrl: 'modules/core/views/contact.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);