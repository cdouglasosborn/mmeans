'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$mdSidenav', 'Authentication', 'Menus', '$rootScope',
	function($scope, $mdSidenav, Authentication, $rootScope) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;

		$scope.toggleSidenav = function(menuId) {
    		$mdSidenav(menuId).toggle();
  		};
	}
]);