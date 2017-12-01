var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
	
		})
		.when('/viewStudents', {
			templateUrl: 'view/viewStudents.html',
			controller: 'StudentController'
		})
		.when('/posts', {
			templateUrl: 'view/posts.html',
			controller: 'PostController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});


mainApp.controller('StudentController', function($scope) {
	$scope.students = [
		{name: 'Mark Waugh', city:'New York'},
		{name: 'Steve Jonathan', city:'London'},
		{name: 'John Marcus', city:'Paris'}
	];
console.log('En StudentController');
	$scope.message = "Click on the hyper link to view the students list.";
});
