"use strict";

app.controller("createPlanCtrl", function($scope, authFactory, $location, userFactory){

	let user = authFactory.getUser();

	$scope.plan = {
		name: "",
		day: "",
		frequency: "",
		targetReps: "",
		completed: "",
		user: user

	};

	$scope.savePlan = ()=>{
		let planName = $scope.plan.name;
		userFactory.saveUserPlan(planName, $scope.plan)
		.then((obj)=>{
			toastr.info("You've got a plan. Now go add some exercises!");
			$location.url("/findExercises");
			$scope.$apply();
		});
	};
	
});