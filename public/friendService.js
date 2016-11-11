angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      return $http({
        method: 'post',
        url: 'http://localhost:8899/api/login',
        data: user
      }).then(function(response){
        return response;
      });
    };

    this.getFriends = function() {
    	/* FIX ME */
    };

});
