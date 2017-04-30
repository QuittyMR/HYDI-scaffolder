angular
    .module('baseline-ui')
    .component('baselineModule', {
        controller: BaselineModuleController,
        bindings: {
            aliveResponse: '<'
        },
        templateUrl: 'app/modules/index/index.html'
    });

function BaselineModuleController(BaseService, RestService, $log) {
    var ctrl = this;

    // Communication example with backend
    var echoUrl = BaseService.api.echo;

    RestService.getResponse(echoUrl, {params: {message: 'Echoed via GET'}}).then(function (response) {
        $log.debug(response);
    });

    RestService.getResponse(echoUrl, {data: {message: 'Echoed via POST'}}).then(function (response) {
        $log.debug(response);
    });
}
