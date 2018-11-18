// This configuration tells $translateProvider to load translations from the [language].json files
// in '/dist/translations/'.'

// To allow minification to rename the function parameters and still be able to inject the right services
// make sure you use Inline Array Annotation or $inject Property Annotation not Implicit Annotation
angular.module('angularjs-webpack').config(['$translateProvider', function ($translateProvider) {
	$translateProvider
		.preferredLanguage('en')
		.useStaticFilesLoader({
        	prefix: '/dist/translations/',
        	suffix: '.json'
    	})
	}
]);
