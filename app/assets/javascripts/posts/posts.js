angular.module('flapperNews')
.factory('posts', [
	'$http',
	function($http){
	var o = {
		posts: [{title:"Wazzappp", upvotes:12}]
	};
	o.getAll = function() {
		return $http.get('/posts.json').success(function(data){
			angular.copy(data, o.posts);
		});
	};
	o.create = function() {
		return $http.post('/posts.json', post).success(function(data){
			o.posts.push(data);
		});
	};
	return o;
}]);