"use strict";

app.controller("homeCtrl", function($location, mainDataFactory, $scope){

	$scope.movements = [];

	$scope.getSample = ()=>{
		mainDataFactory.getSampleMovements()
		.then((obj)=>{
			$scope.movements = obj;
		});
	};

	$scope.getByMuscle = ()=>{
		mainDataFactory.getSampleMuscle()
		.then((obj)=>{
			$scope.movements = obj;
		});
	};

	$scope.getByEquipment = ()=>{
		mainDataFactory.getSampleEquipment()
		.then((obj)=>{
			$scope.movements = obj;
		});
	};


});