"use strict";

app.controller("browseCtrl", function($location, $scope, userFactory, mainDataFactory, authFactory){
	let user = authFactory.getUser();

	$scope.searchTerm = "";
	$scope.exercises = [];
	$scope.muscle = "";
	$scope.equipment= "";
	

	$scope.findByEquipment = ()=>{
		console.log("clicked");
		mainDataFactory.findByEquipment($scope.equipment)
		.then((obj)=>{
			let idArray = Object.keys(obj);
		    	idArray.forEach(function(key){
		      		obj[key].id = key;
	      		});
			$scope.exercises = obj;
			$scope.$apply();
		});
	};

	$scope.findByName = ()=>{
		mainDataFactory.findByName($scope.searchTerm)
		.then((obj)=>{
			let idArray = Object.keys(obj);
		    	idArray.forEach(function(key){
		      		obj[key].id = key;
	      		});
			$scope.exercises = obj;
			$scope.$apply();
		});
	};
	$scope.getMuscleExercises = ()=>{
		mainDataFactory.getMuscleExercises($scope.muscle)
		.then((obj)=>{
			let idArray = Object.keys(obj);
		    	idArray.forEach(function(key){
		      		obj[key].id = key;
	      		});
			$scope.exercises = obj;
			console.log($scope.exercises);
			$scope.$apply();
		});	
	};

	$scope.save = ()=>{
		if (user === undefined){
			$location.url("/login");
			toastr.warning("Hard to save your stuff if you're not logged in, son.");
		} else {
			$location.url("/createPlan");
		}
	};
});