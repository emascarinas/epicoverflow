var $httpBackend, $rootScope, $controller, beforeEachShared, afterEachShared, $compile, config;


beforeEachShared = function () {
    beforeEach(module('epicoverflowApp', 'mockedData'));
    beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$controller_, $templateCache, _$compile_, _config_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $controller = _$controller_;
        $templateCache.put('views/main.html', '');
        $templateCache.put('views/questions.html', '');
        $templateCache.put('veiws/question.html', '');
        config = _config_;
    }));
};
afterEachShared = function () {
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
};



