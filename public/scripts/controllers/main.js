angular.module('wipms')

	// inject the Item service factory into our controller
	.controller('mainController', ['$scope','$http','Items', function($scope, $http, Items) {
		$scope.formData = {};
		$scope.page = 1;

		// GET =====================================================================
		// when landing on the page, get all items and show them
		// use the service to get all the items
		// Items.get()
		// 	.success(function(data) {
		// 		$scope.items = data;
		// 	});

		$scope.locTree = [
  			'Bedroom',
  			'Living room',
  			'Home office',
  			'Kitchen',
  			'Bathroom',
  			'Guest bedroom',
  			'Basement',
  			'Bedroom: Closet',
  			'Bedroom: Under bed',
  			'Living room: Entertainment center',
  			'Living room: Hall closet',
  			'Living room: Mantle',
  			'Home office: Filing cabinet',
  			'Home office: Closet',
  			'Home office: Archive bin',
  			'Home office: Cabinets',
  			'Kitchen: Spice cabinet',
  			'Kitchen: Pantry',
  			'Kitchen: Top of refrigerator',
  			'Bathroom: Medicine cabinet',
  			'Guest bedroom: Short chest of drawers',
  			'Guest bedroom: Tall chest of drawers',
  			'Guest bedroom: Closet',
  			'Basement: Under stairs',
  			'Basement: Box storage'
  	];

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.stepOne = function() {
			if ($scope.item.name != undefined) {
				$scope.page = 2;
			}
		};

		$scope.createItem = function() {
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
				// TODO: error 
				// call the create function from our service (returns a promise object)
				Items.create($scope.item)
					.success(function(data) {
						$scope.page = 3;
					});
		};

		$scope.loadItems = function() {
			Items.get()
				.success(function(data) {
					console.log(data);
					$scope.items = data;
				})
		};
		// $scope.loadItems();

	}]);