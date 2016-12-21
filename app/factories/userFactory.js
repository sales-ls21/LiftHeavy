"use strict";

app.factory("userFactory", function($http, FBInfo){

	let saveUserExercises = (exerciseObj)=>{
		return new Promise ((resolve, reject)=>{
			$http.post(`${FBInfo.databaseURL}/exercises.json`)
			.then((obj)=>{
				resolve(obj);
			});	
		});
	};

	let getUserExercises = (user)=>{
		return new Promise ((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/movements.json?orderBy="user"&equalTo="${user}"`)
			.then((obj)=>{
				resolve(obj.data);
			});	
		});
	};

	let getUserWorkout = (user, date)=>{

	};

	return{saveUserExercises, getUserExercises};
});