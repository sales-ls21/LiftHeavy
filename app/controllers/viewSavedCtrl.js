"use strict";

app.controller("viewSavedCtrl", function($location, $scope, userFactory, authFactory){

	let user = authFactory.getUser();
	$scope.plans = [];
	

	let showUserPlans = ()=>{
		userFactory.getUserPlans(user)
		.then((obj)=>{
			var array = Object.values(obj);
			$scope.plans = array;
			console.log($scope.plans);
			$scope.$apply();
		});
	};

	showUserPlans();

	$scope.completed = ()=>{
		$location.url("/trackProgress");
	};
});