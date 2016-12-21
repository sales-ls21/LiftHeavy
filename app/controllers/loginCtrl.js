"use strict";

app.controller("loginCtrl", function($scope, $location, authFactory){

var newObj;

	$scope.user = {
		name: "",
		email: "",
		password: ""
	};

	$scope.login = ()=>{
		console.log($scope.user);
		authFactory.loginUser($scope.user).then((obj)=>{
			$location.url("/dashboard");
			$scope.$apply();
		});
	};

	$scope.home = ()=>{
		$location.url("/");
	};

	$scope.googleSignIn = ()=>{
		authFactory.googleSignIn()
		.then((user)=>{
			$location.url("/dashboard");	
			$scope.apply();	
		});
	};

	$scope.register= ()=>{
		authFactory.createUser($scope.user)
		.then((user)=>{
			$location.url("/dashboard");
			$scope.$apply();	
		});
	};
	
});