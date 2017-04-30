angular
    .module('baseline-ui')
    .service('BaseConfig', function () {
        this.host = {
            originUrl: 'http://localhost',
            apiUrl: 'http://localhost:4242'
        };
    });
