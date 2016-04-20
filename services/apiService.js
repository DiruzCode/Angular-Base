  angular.module("apiService", [])
    .service("$Api", ['$http', 'config',
        function($http, config) {

            this.GET = function(url) {
                return $http.get(config.api + url).success(function(data) {
                    return data;
                });
            };

            this.PUT = function(url,aryObj) {
                return $http.put(config.api + url, aryObj).success(function(data) {
                    return data;
                });
            };

            this.POST = function(url,aryObj) {
                return $http.post(config.api + url, aryObj).success(function(data) {
                    return data;
                });
            };

            this.DELETE = function(url,aryObj) {
                return $http.delete(config.api + url, aryObj).success(function(data) {
                    return data;
                });
            };
        }
    ]);
