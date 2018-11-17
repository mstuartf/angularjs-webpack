angular.module('angularjs-webpack').config(['$translateProvider', function ($translateProvider) {
	$translateProvider
		.preferredLanguage('en')
		.useStaticFilesLoader({
        	prefix: '/dist/translations/',
        	suffix: '.json'
    	})
	}
]);
