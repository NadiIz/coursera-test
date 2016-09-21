(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.lunch = "";
	$scope.resultingMsg = "";

	$scope.displayMsg = function() {
		var msg = generateMsg($scope.lunch, $scope.plc_msg);
		$scope.resultingMsg = msg;
	};

	function generateMsg(string) {
		var array_str = string.split(',');
		var result = "";
		if (string == "") {
			result = "Please enter data first";
		} else if (array_str.length > 3) {
			result = "Too much!";
		} else if (array_str.length > 0) {
			result = "Enjoy!";
		}
		return result;
	};

}

})();