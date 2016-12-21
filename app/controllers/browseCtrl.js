"use strict";

app.controller("browseCtrl", function($scope, userFactory, mainDataFactory){
	
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

	// $scope.save = ()=>{
	// 	userFactory.saveUserExercises()=>{

	// 	};
	// };
});