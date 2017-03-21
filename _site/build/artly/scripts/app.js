
/* App module */

var artlyApp = angular.module('artlyApp', [
	'artlyControllers',
	'artlyFactories',
	'artlyFilters',
	'ngAnimate',
	'ngRoute'
]);

artlyApp.config( 
	function($routeProvider){
		$routeProvider.
			when('/painter:painterId', {
				templateUrl: 'partials/painter.html',
				controller: 'painterController'
			}).
			when('/search', {
				templateUrl: 'partials/search.html',
				controller: 'searchController'
			}).
			when('/epochs', {
				templateUrl: 'partials/epochs.html',
				controller: 'epochController'
			}).
			when('/gallery', {
				templateUrl: 'partials/gallery.html',
				controller: 'galleryController'
			}).
			when('/', {
				templateUrl: 'partials/index.html',
				controller: 'mainController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
);
