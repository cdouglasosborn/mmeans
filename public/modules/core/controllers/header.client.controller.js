'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$mdSidenav', 'Authentication', 'Menus',
	function($scope, $mdSidenav, Authentication) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;

		$scope.toggleSidenav = function(menuId) {
    		$mdSidenav(menuId).toggle();
  		};
	}
]);