"use strict";

app.factory("userFactory", function($http, FBInfo){
	let planId;

	let saveUserPlan = (plan, userObj)=>{
		return new Promise ((resolve, reject)=>{
			$http.post(`${FBInfo.databaseURL}/plans/${plan}.json`, angular.toJson(userObj))
			.then((obj)=>{
				resolve(obj.data);
			});	
		});
	};

	let saveUserExercises = (planToSearch, exerciseToSave)=>{
		console.log(exerciseToSave);
		return new Promise ((resolve, reject)=>{
			$http.patch(`${FBInfo.databaseURL}/plans/${planToSearch}.json`, angular.toJson(exerciseToSave))
			.then((obj)=>{
				resolve(obj);
			});
  		});	
	};

	let getUserPlans = (name)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`${FBInfo.databaseURL}/plans.json?orderBy="user"&equalTo="${name}"`)
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let getByPlanName = (name)=>{
		return new Promise((resolve, reject)=>{
			$http.get(`{FBInfo.databaseURL}/plans/${name}.json`)
			.then((obj)=>{
				resolve(obj);
			});
		});
	};

	return{getByPlanName, saveUserPlan, saveUserExercises, getUserPlans};
});