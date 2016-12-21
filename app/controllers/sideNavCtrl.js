"use strict";

app.controller("sideNavCtrl", function($scope, authFactory){

	$scope.logout = ()=>{
		authFactory.logoutUser();
	};
	
});