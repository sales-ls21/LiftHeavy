"use strict";

app.controller("findExercisesCtrl", function($scope, $location, userFactory, mainDataFactory, authFactory){
	let user = authFactory.getUser();

	$scope.selectedPart = "";
	$scope.selectedEquipment = "";
	$scope.exercises = [];
	$scope.planToSearch = "";
	$scope.exercisesToSave = "";
	$scope.plans = "";


	if($scope.selectedPart === ""){
		$(".card1").hide();
	} else{
		$(".card2").hide();
	}

	$scope.findPart = ()=>{
		console.log($scope.selectedPart);
		mainDataFactory.getMuscleExercises($scope.selectedPart)
		.then((obj)=>{
			$scope.exercises = obj;
			$scope.$apply();
		});
	};

	$scope.findEquipment= ()=>{
		mainDataFactory.findByEquipment($scope.selectedEquipment)
		.then((obj)=>{
			$scope.exercises = obj;
			$scope.$apply();
		});
	};

	$scope.findPlans = ()=>{
		console.log("clicked", user);
		userFactory.getUserPlans(user)
		.then((obj)=>{
			$scope.plans = obj;
			$scope.$apply();
		});
	};
	$scope.save = ()=>{
		let id = $scope.exercisesToSave.exercise;
		let planId = $scope.planToSearch.planId;
		let userObj = {
			planId: planId,
		};
		userFactory.saveUserExercises($scope.exercisesToSave.exercise, userObj)
		.then((obj)=>{
			toastr.success("Ok, added. What now?");
			$location.url("/viewSaved");
			$scope.$apply();
		});
	};
	
});