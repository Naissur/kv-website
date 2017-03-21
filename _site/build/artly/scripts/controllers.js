
var artlyControllers = angular.module('artlyControllers', []);

artlyControllers
	.controller('mainController', 
		function($scope){
			$scope.showImage = function(url){
				console.log(url);
			}
		}
	)
	.controller('searchController', 
		function($scope, painterFactory, searchFactory){
			var painters = painterFactory.getPainters();
			$scope.painters = painters;

			var searchParams = searchFactory.getParams();
			$scope.search = {};
			$scope.search.params = searchParams;

			activeParams = [];

			for(var i = 0; i < searchParams.length; i++){
				activeParams.push(-1);
			}


			function isActiveParamOption(param, option){
				var param_index = searchParams.indexOf(param);
				if(param_index < 0) { return false; }

				var option_index = param.options.indexOf(option);
				if(option_index < 0) { return false; }

				if( activeParams[param_index] == option_index ){
					return true;
				}else{
					return false;
				}
			}

			function toggleActiveParamOption(param, option){
				var param_index = searchParams.indexOf(param);
				if(param_index < 0) { return false; }

				var option_index = param.options.indexOf(option);
				if(option_index < 0) { return false; }

				if( activeParams[param_index] == option_index ){
					activeParams[param_index] = -1;
				}else{
					activeParams[param_index] = option_index;
				}
			}
			
			function getActiveParamOptions(){
				return activeParams;
			}

			$scope.isActiveParamOption = isActiveParamOption;
			$scope.toggleActiveParamOption = toggleActiveParamOption;
			$scope.getActiveParamOptions = getActiveParamOptions;
		}
	)
	.controller('painterController', 
		function($scope, $routeParams, painterFactory){
			var painters = painterFactory.getPainters();

			var id = $routeParams.painterId;
			$scope.currentPainter = painters[id];
		}
	)
	.controller('galleryController', 
		function($scope, galleryFactory){
			var gallery = galleryFactory.getGallery();
			$scope.gallery = gallery;
		}
	)
	.controller('epochController', 
		function($scope, epochFactory){
			var epochs = epochFactory.getEpochs();
			console.log(epochs);

			$scope.epochs = epochs;
		}
	);
