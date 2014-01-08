(function() {
	'use strict';

var app = angular.module('urlrewrite-options', []);

app.controller('OptionsCtrl', function($scope) {
	var mappingKey = 'nl.sjmulder.urlrewrite.mappings';

	$scope.lastMapping = function() {
		return $scope.mappings[$scope.mappings.length - 1];
	}

	$scope.removeAt = function(index) {
		if (index >= 0 && index < $scope.mappings.length - 1) {
			$scope.mappings.splice(index, 1);
		}
	}

	$scope.$watch('mappings', function(value) {
		if (value) {
			localStorage[mappingKey] = angular.toJson(value.slice(0, value.length - 1));
		}
	}, true);

	$scope.$watch('lastMapping()', function(value) {
		if (value && (value.sourceUrl || value.destinationUrl)) {
			$scope.mappings.push({ sourceUrl: '', destinationUrl: '' });
		}
	}, true);

	$scope.mappings = JSON.parse(localStorage[mappingKey] || '[]');
	$scope.mappings.push({ sourceUrl: '', destinationUrl: '' });
});

})();
