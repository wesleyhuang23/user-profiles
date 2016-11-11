angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {

	$scope.login = function( user ) {
		console.log(user);
		console.log('mainCtrl reached');
		friendService.login(user).then(function( response ) {
			console.log(response);
			if (response.data.userFound) {
				$location.path('/profile');
			} else {
				alert('user not found');
			}
		});
	};

});
