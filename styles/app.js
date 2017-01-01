(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var buyCtrl = this;

		buyCtrl.itemName = "";
		buyCtrl.itenQuantity = "";

		buyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

		buyCtrl.removeItem = function(itemIndex) {
			ShoppingListCheckOffService.removeItem(itemIndex);
		};
	}


	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtCtrl = this;

		boughtCtrl.itemName = "";
		boughtCtrl.itemQuantity = "";

		boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
	}


	function ShoppingListCheckOffService() {
		var checkOffService = this;

		var toBuyItems = [
			{"itemName": "Cookies", "itemQuantity": 10},
			{"itemName": "Chips", "itemQuantity": 6},
			{"itemName": "Sugary Drink", "itemQuantity": 8}
		];

		var boughtItems = [
			// {"itemName": "Cookies", "itemQuantity": 5}
		];

		checkOffService.getToBuyItems = function() {
			return toBuyItems;
		};

		checkOffService.getBoughtItems = function() {
			return boughtItems;
		};

		checkOffService.removeItem = function (itemIndex) {
			var tmpItem = {
				itemName: toBuyItems[itemIndex].itemName,
				itemQuantity: toBuyItems[itemIndex].itemQuantity
			};
			boughtItems.push(tmpItem);
			toBuyItems.splice(itemIndex, 1);
		};
	}

})();