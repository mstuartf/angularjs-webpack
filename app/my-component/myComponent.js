// This is a simple component that injects 'myService' and allows the user to generate random
// colours by clicking on a button. 


var MyComponent = {

	// To allow minification to rename the function parameters and still be able to inject the right services
	// make sure you use Inline Array Annotation or $inject Property Annotation not Implicit Annotation
	controller: ['myService', function (myService) {

		this.newColor = function () {
			this.color = myService.getRandomColor();
		}
		
		this.newColor();

	}],

	template: require('./my-component.template.html')
	
}

angular.module('angularjs-webpack').component('myComponent', MyComponent);
