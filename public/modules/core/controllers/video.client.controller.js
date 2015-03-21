'use strict';

angular.module('core').controller('VideoController', ['$scope', '$rootScope',
	function($scope, $rootScope) {

		$rootScope.title = 'Videos';
		
		$rootScope.additionalClass = 'header-videoseries';
			
	}
]);