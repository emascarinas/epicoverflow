exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // Spec patterns are relative to the location of this config.
    specs: [
        'test/e2e/*Spec.js'
    ],
//    multiCapabilities: [{
//            'browserName': 'firefox'
//        }, {
//            'browserName': 'chrome'
//        }],
    multiCapabilities: [{
            'browserName': 'chrome'
        }],
    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    suites: {
    },
    
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },
    allScriptsTimeout: 10000,
    baseUrl: 'http://localhost:9000',
    onPrepare: function() {
        browser.driver.manage().window().maximize();
    }
};
