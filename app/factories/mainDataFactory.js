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

	return{getSampleMovements};
	
});