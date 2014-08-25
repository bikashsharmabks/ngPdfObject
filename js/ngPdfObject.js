/*
 * ngPdfObject - directive to embed pdf in angular page
 * http://github.com/bikash1999/ngPdfObject
 */

(function (window, angular, undefined) {
	'use strict';

	var module = angular.module('ngPdfObject', []);

	module.directive('ngPdfObject', function () {
		return {
			replace: 'true',
			scope:{
				url : "@url",
				height: "@height",
				width: "@width"
			},
			template: '<div id="pdf"><div>',			
			link: function (scope, elem, attrs) {
				
				var success = new PDFObject({ url: scope.url, width:scope.height, height:scope.height }).embed("pdf");				
			}
		};
	});
})(window, window.angular);