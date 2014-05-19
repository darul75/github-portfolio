(function (angular) {
'use strict';	

	angular.module('githubPortfolio', [])					
		// DIRECTIVE
		.directive('portfolio', ['$timeout', function(timeout) {
			return {
				restrict : 'AE',
				require: '?ngModel',
				scope: { options:'=' },
				priority: 1,
				template:
					'<span ng-class="mainSliderClass" id="{{sliderTmplId}}">' +
						'<table><tr><td>' +
							'<div class="jslider-bg">' +
								'<i class="l"></i><i class="f"></i><i class="r"></i>' +
								// '<i class="v"></i>' +
							'</div>' +
							'<div class="jslider-pointer"></div>' +
							'<div class="jslider-pointer jslider-pointer-to"></div>' +
							'<div class="jslider-label"><span ng-bind-html="from"></span></div>' +
							'<div class="jslider-label jslider-label-to"><span ng-bind-html="to"></span>{{options.dimension}}</div>' +
							'<div class="jslider-value"><span></span>{{options.dimension}}</div>' +
							'<div class="jslider-value jslider-value-to"><span></span>{{options.dimension}}</div>' +
							'<div class="jslider-scale" id="{{sliderScaleDivTmplId}}"></div>' +
						'</td></tr></table>' +
					'</span>',
				link : function(scope, element, attrs, ngModel) {					
					if(!ngModel) return; // do nothing if no ng-model							

					// model -> view
		            ngModel.$render = function () {
						//elm.html(ctrl.$viewValue);

						if (typeof(ngModel.$viewValue) === 'number') 
						ngModel.$viewValue = ''+ngModel.$viewValue;

		            };

					
					
				}
			};
		}])
		// DIRECTIVE
		.service('portfolio-service', ['$timeout', function(timeout) {
			
			
		}]);

})(angular);
