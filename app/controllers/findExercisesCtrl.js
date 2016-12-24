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
		let plan = $scope.planToSearch.name;
		let name = $scope.exercisesToSave.exercise;
		let userObj = {
			exercise: name,
			user: user
		};
		console.log(plan, userObj);
		userFactory.saveUserExercises(plan, userObj)
		.then((obj)=>{
			toastr.success("Ok, added. What now?");
			$location.url("/viewSaved");
		});
	};
	
});