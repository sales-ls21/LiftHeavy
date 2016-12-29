"use strict";

app.controller("sideNavCtrl", function($scope, authFactory, $location){
	let user = authFactory.getUser();
	console.log(user);

	$scope.viewSaved = ()=>{
		if (user === undefined){
			$location.url("/");
			toastr.warning("Gotta log in to get here, bro.");
		} else {
			$location.url("/viewSaved");
		}
	};

	$scope.createPlan = ()=>{
		if (user === undefined){
			$location.url("/");
			toastr.warning("We're gonna need your name to create a plan for you. Sign in!");
		} else {
			$location.url("/createPlan");
		}
	};

	$scope.trackProgress=()=>{
		if (user === undefined){
			$location.url("/");
			toastr.warning("What progress? Who are you? Log in!");
		} else {
			$location.url("/trackProgress");
		}
	};

	$scope.logout = ()=>{
		authFactory.logoutUser();
		toastr.success("You've been logged out.");
		$location.url("/");
	};
	
});