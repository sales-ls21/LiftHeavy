"use strict";

app.controller("homeCtrl", function($location, mainDataFactory, $scope){
	$scope.movements = [];

	$scope.getSample = ()=>{
		mainDataFactory.getSampleMovements()
		.then((obj)=>{
			$scope.movements = obj;
		});
	};

});