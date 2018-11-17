
// import 3rd party dependencies
require('angular')
require('angular-translate')
require("angular-translate-loader-static-files");

// import main app module
require('./app.module')

// import components and services
require('./my-component/myComponent')
require('./my-service/myService.service')

// import 3rd party and custom CSS
require('bootstrap/dist/css/bootstrap.css')
require('./css/my-styles.css')

// import translations config and copy files
require('./translations/en.json')
require('./translate')
