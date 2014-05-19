(function (angular) {
'use strict';	

	angular.module('githubPortfolio', ['ngResource'])	
		.factory('GithubAPI', ['$resource', function($resource) {
			var api = {};

			api.authorize = $resource('https://github.com/login/oauth/authorize', {client_id: '6a4ac2fc975203e0c3fb', redirect_uri:'http://localhost:8000/auth/' });			
			
			api.token = $resource(
				'https://github.com/login/oauth/access_token', 
				{
					client_id: '6a4ac2fc975203e0c3fb', 
					client_secret: 'fe5911ede785de73e2d3310a5845a41af9d54a9b',
					code:'a3be47b7f00af354600a' },
				{'token': { method:'POST' }}
			);

		    return api;
		}])				
		// DIRECTIVE
		.directive('portfolio', ['$timeout', 'GithubAPI', function(timeout, GithubAPI) {
			return {
				restrict : 'AE',
				// require: '?ngModel',
				scope: { options:'=' },
				priority: 1,
				template:
					'<div>toto' +						
					'</div>',
				link : function(scope, element, attrs, ngModel) {					

		            var auth = GithubAPI.authorize;
		            var token = GithubAPI.token;
		     
		      		auth.get().$promise.then(function(user) {
           				console.log(user);
         			});

         			token.token().$promise.then(function(token) {           				
           				scope.tokenInfo = {
           					access : token.access_token,
           					scope : token.scope,
           					type: token.token_type
           				};
         			});
					
				}
			};
		}])
		// DIRECTIVE
		.service('portfolio-service', ['$timeout', function(timeout) {
			
			
		}]);


})(angular);
