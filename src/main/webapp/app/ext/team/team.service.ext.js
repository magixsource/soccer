(function() {
    'use strict';
    angular
        .module('soccerApp')
        .factory('TeamExt', TeamExt);

    TeamExt.$inject = ['$resource'];

    function TeamExt ($resource) {
        var resourceUrl =  'api/teams/:id/player-statistics';

        return $resource(resourceUrl, {}, {
            'queryPlayerStatistics': { method: 'GET', isArray: true},
            'queryPlayers': { url: 'api/teams/:id/players', method: 'GET', isArray: true},
            'queryGames': { url: 'api/teams/:id/games', method: 'GET', isArray: true}
        });
    }
})();