// This is a simple service that generates a random colour hex. 


function MyService () {

	var self = this;

	self.getRandomColor = function () {

		var letters = '0123456789ABCDEF';
		
		var colorHex = '#';

		for (var i = 0; i < 6; i++) {
			colorHex += letters[Math.floor(Math.random() * 16)];
		}

		return colorHex;

	}

}

angular.module('angularjs-webpack').service('myService', MyService);
