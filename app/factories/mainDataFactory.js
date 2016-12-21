"use strict";

app.factory("mainDataFactory", function($http, FBInfo){

	let getSampleMovements = ()=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/movements.json?orderBy="random"&equalTo=22`)
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let getSampleMuscle = ()=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/movements.json?orderBy="muscle"&equalTo="abs"`)
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let getSampleEquipment = ()=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/movements.json?orderBy="equipment"&equalTo="bodyweight"`)
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let getMuscleExercises = (muscle)=>{
		console.log("passed", muscle);
		return new Promise ((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/movements.json?orderBy="muscle"&equalTo="${muscle}"`)
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let findByName = (searchTerm)=>{
		return new Promise ((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/movements.json?orderBy="exercise"&equalTo="searchTerm"`)
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let findByEquipment = (equipment)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/movements.json?orderBy="equipment"&equalTo="${equipment}"`)
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	return{findByEquipment, findByName, getMuscleExercises, getSampleMovements, getSampleMuscle, getSampleEquipment};
	
});