var mainApp = angular.module('mainApp');

mainApp.controller('PostController', function($scope, $http) {
	console.log('En PostController');

	$scope.posts = [];


	function getPosts(){
		$http({
        	method: 'GET',
	        url: 'http://localhost:3000/posts/all',
	        header: {"Access-Control-Allow-Origin" : "*"}
  //, X-Requested-With, Content-Type, Accept");
		})
		.success(function(res){
			console.log("Datos obtenidos: " + angular.toJson(res, true));
			$scope.posts = res;
		})
		.error(function(err){
			console.log('Ocurrió un error! ' + angular.toJson(err, true));
		});
	}
	

	function init(){
console.log('Inicio el post controller')
		getPosts();	
	}

	init();
	
});
