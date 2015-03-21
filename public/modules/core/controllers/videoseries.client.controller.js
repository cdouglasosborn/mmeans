'use strict';

angular.module('core').controller('VideoseriesController', ['$scope', '$rootScope', '$stateParams',
	function($scope, $rootScope, $stateParams) {

		$rootScope.title = 'Videos';

		$scope.seriesid = $stateParams.videoseries;

		console.log($stateParams);

		switch ($scope.seriesid) {
			case 'founders':
				$scope.seriesName = 'Development for Founders';
				$scope.seriesDescription = 'Build and understand building startups in hours';
				$scope.seriesHeader = 'foundersSplash';
				break;
			case 'speedstartup':
				$scope.seriesName = 'Speed Startup';
				$scope.seriesDescription = 'Learn the MEAN stack to build startups in minutes';
				$scope.seriesHeader = 'speedSplash';
				break;
			case 'tips':
				$scope.seriesName = 'Tips & Tricks';
				$scope.seriesDescription = 'Quick development and founder tips to help you get started';
				$scope.seriesHeader = 'tipsSplash';
				break;
			case 'startuphour':
				$scope.seriesName = 'Startup in an hour';
				$scope.seriesDescription = 'Watch us build a startup in exactly an hour';
				$scope.seriesHeader = 'hourSplash';
				break;
			default:
		        //
		        break;
		}


		$scope.videos = [
			{
				name: 'Video 1',
				description: 'This is a new video description',
				image: 'http://placehold.it/300x300'
			},
			{
				name: 'Video 1',
				description: 'This is a new video description',
				image: 'http://placehold.it/300x300'
			},
			{
				name: 'Video 1',
				description: 'This is a new video description',
				image: 'http://placehold.it/300x300'
			},
			{
				name: 'Video 1',
				description: 'This is a new video description',
				image: 'http://placehold.it/300x300'
			},
			{
				name: 'Video 1',
				description: 'This is a new video description',
				image: 'http://placehold.it/300x300'
			}
		];
		
		$rootScope.additionalClass = 'header-videoseries';
			
	}
]);