angular
    .module('baseline-ui')
    .factory('BaseService', BaseService)
;

function BaseService(BaseConfig) {
    function composeRouteUrl(route) {
        return BaseConfig.host.apiUrl + route;
    }

    return {
        api: {
            alive: composeRouteUrl('system/alive'),
            echo: composeRouteUrl('system/echo')
        }
    };
}
