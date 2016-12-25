"use strict";

app.controller("createPlanCtrl", function($scope, authFactory, $location, userFactory){

	let user = authFactory.getUser();

	$scope.plan = {
		name: "",
		day: "",
		frequency: "",
		targetReps: "",
		completed: "",
		planId: Math.floor((Math.random() * 1000) + 1),
		user: user

	};

	$scope.savePlan = ()=>{
		console.log($scope.plan);
		userFactory.saveUserPlan($scope.plan)
		.then((obj)=>{
			toastr.info("You've got a plan. Now go add some exercises!");
			$location.url("/findExercises");
			$scope.$apply();
		});
	};
	
});