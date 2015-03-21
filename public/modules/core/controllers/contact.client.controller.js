'use strict';

angular.module('core').controller('ContactController', ['$scope', '$rootScope',
	function($scope, $rootScope) {
		$rootScope.title = 'Contact Us';

		$rootScope.additionalClass = 'header-contact';	
	}
]);