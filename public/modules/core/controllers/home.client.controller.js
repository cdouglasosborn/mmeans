'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$rootScope',
	function($scope, Authentication, $rootScope) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$rootScope.additionalClass = '';	

		$rootScope.title = 'Welcome';

		$scope.news = [
			{
				title: 'Some News',
				description: 'This is some quite long description about news',
				image: 'http://placehold.it/350x250'
			},
			{
				title: 'Some News',
				description: 'This is some quite long description about news',
				image: 'http://placehold.it/350x250'
			},
			{
				title: 'Some News',
				description: 'This is some quite long description about news',
				image: 'http://placehold.it/350x250'
			},
			{
				title: 'Some News',
				description: 'This is some quite long description about news',
				image: 'http://placehold.it/350x250'
			},
			{
				title: 'Some News',
				description: 'This is some quite long description about news',
				image: 'http://placehold.it/350x250'
			},
			{
				title: 'Some News',
				description: 'This is some quite long description about news',
				image: 'http://placehold.it/350x250'
			},
			{
				title: 'Some News',
				description: 'This is some quite long description about news',
				image: 'http://placehold.it/350x250'
			}
		];
	}
]);