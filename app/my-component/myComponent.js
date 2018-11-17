
var MyComponent = {

	controller: ['myService', function (myService) {

		this.newColor = function () {
			this.color = myService.getRandomColor();
		}
		
		this.newColor();

	}],

	template: require('./my-component.template.html')
	
}

angular.module('angularjs-webpack').component('myComponent', MyComponent);
