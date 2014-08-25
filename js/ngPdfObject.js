/*
 * ngPdfObject - directive to embed pdf in angular page
 * http://github.com/bikash1999/ngPdfObject
 */

(function (window, angular, undefined) {
	'use strict';

	var module = angular.module('ngPdfObject', []);
	
	module.provider('ngPdfObject', function () {
	});

	module.directive('ngPdfObject', ['ngPdfObject', function (ngDialog) {
		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
				elem.on('click', function (e) {
					e.preventDefault();
					
				});
			}
		};
	}]);
})(window, window.angular);