angular
    .module('baseline-ui')
    .factory('RestService', RestService)
;

function RestService(BaseService, $http, $q) {
    function getResponse(url, kwargs) {
        if (!kwargs) {
            kwargs = {};
        }
        var request = {
            method: 'GET',
            url: url,
            params: {},
            headers: {},
            data: {}
        };

        if ('data' in kwargs) {
            request.method = 'POST';
            request.headers['Content-type'] = 'application/json';
        }

        $.extend(request, kwargs);

        var deferred = $q.defer();

        $http(request)
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            }).catch(function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        getResponse: getResponse
    };
}
