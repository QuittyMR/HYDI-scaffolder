angular
    .module('baseline-ui')
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('indexModule', {
                component: 'baselineModule',
                url: '/',
                resolve: {
                // Route to module only if backend is responsive
                    aliveResponse: isAlive
                }
            });
    });

function isAlive(BaseService, RestService) {
    return RestService.getResponse(BaseService.api.alive);
}
