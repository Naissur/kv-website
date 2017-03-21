
var artlyFilters = angular.module('artlyFilters', []);

artlyFilters.filter('searchFilter', function (){
	return function(input, query, params, activeParams){

		var activeParamsNames = [];

		for(var param_index = 0; param_index < params.length; param_index++){
			activeParamsNames.push(params[param_index].options[ activeParams[param_index] ] );
		}

		var resArray = [];

		console.log(activeParams);
		console.log(input);

		for(var input_index = 0; input_index < input.length;  input_index++){
			if(query == null){
				query = '';
			}

			//TODO Make something more agile
			if( ( (activeParamsNames[0] == input[input_index].epoch) || (activeParams[0] < 0) ) &&
			    ( (activeParamsNames[1] == input[input_index].genre) || (activeParams[1] < 0) ) &&
				( (input[input_index].name.toLowerCase().indexOf(query.toLowerCase())   >= 0) || (query == '') ) ){
				resArray.push(input[input_index]);
			}
		}

		return resArray;
	};
});
