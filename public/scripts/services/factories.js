angular.module('wipms')
	.factory('Items', ['$http', function($http) {
		return {
			get : function() {
				return $http.get('/api/items');
			},
			create : function(itemData) {
				return $http.post('/api/items', itemData);
			}
		}
	}]);