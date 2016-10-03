(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyShoppingController', ToBuyShoppingController)
	.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService) {
		var toBuy = this;

		toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

		toBuy.check = function(itemName, itemQuantity, itemIndex) {
			ShoppingListCheckOffService.check(itemName, itemQuantity, itemIndex);
		};

		toBuy.empty = function() {
			return toBuy.items.length == 0;
		};
	}


	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
		var bought = this;

		bought.items = ShoppingListCheckOffService.getItemsBought();

		bought.empty = function() {
			return bought.items.length == 0;
		};
	}


	function ShoppingListCheckOffService() {
		var service = this;

		var buyList = [{name: 'Cookies', quantity: 10},
		 			   {name: 'Apples', quantity: 3},
					   {name: 'Avocados', quantity: 2}, 
					   {name: 'Tomatoes', quantity: 8},
					   {name: 'Coffee', quantity: 2}];
		var alreadyBoughtList = [];

		service.check = function(itemName, itemQuantity, itemIndex) {
			var item = {
				name: itemName,
				quantity: itemQuantity
			};
			buyList.splice(itemIndex, 1);
			alreadyBoughtList.push(item);
		};

		service.getItemsBought = function() {
			return alreadyBoughtList;
		};

		service.getItemsToBuy = function() {
			return buyList;
		};
	}

}) ();