
var MyComponent = {

	controller: ['myService', '$translate', function (myService, $translate) {

		this.newColor = function () {
			this.color = myService.getRandomColor();
		}
		
		this.newColor();

	}],

	template: require('./my-component.template.html')
	
}

angular.module('angularjs-webpack').component('myComponent', MyComponent);
