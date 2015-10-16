angular.module('flapperNews')
.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){
		$scope.posts = posts.posts;
		
		$scope.addPost = function() {
			if (!$scope.title || $scope.title === '') { return;}
			$scope.posts.push({
				title: $scope.title,
				link: $scope.link,
				upvotes: 0,
				comments: [
					{author: 'Joe', body: 'Cool post!', upvotes:0},
					{author: 'JimBob', body: 'Its all great but very wrong!', upvotes:0}
				]
			});
			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;
		}
	}]);