// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/template1.html",
      controller: 'HomeCtrl'
    })
    .state('consultant', {
      url: "/consultant",
      templateUrl: "views/template.html",
      controller: 'ConsultantCtrl'
    })
    .state('testimonial', {
      url: "/testimonial",
      templateUrl: "views/template.html",
      controller: 'TestimonialCtrl'
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/template.html",
      controller: 'ContactCtrl'
    })
    .state('team', {
      url: "/team",
      templateUrl: "views/template.html",
      controller: 'TeamCtrl'
    })
    .state('privacy', {
      url: "/privacy",
      templateUrl: "views/template.html",
      controller: 'PrivacyCtrl'
    })
    .state('skin', {
      url: "/category/:name/:id",
      templateUrl: "views/template.html",
      controller: 'SkinCtrl'
    })
    .state('subCat', {
      url: "/category/:id/:subcatname/:subid",
      templateUrl: "views/template.html",
      controller: 'SkinCtrl'
    })
    .state('before-after', {
      url: "/before-after",
      templateUrl: "views/template.html",
      controller: 'BeforeCtrl'
    })
    .state('vitiligo', {
      url: "/vitiligo",
      templateUrl: "views/template.html",
      controller: 'VitiligoCtrl'
    })
    .state('about-us', {
      url: "/about-us",
      templateUrl: "views/template.html",
      controller: 'AboutUsCtrl'
    })
    .state('clinic-policy', {
      url: "/clinic-policy",
      templateUrl: "views/template.html",
      controller: 'ClinicPolicyCtrl'
    })
    .state('blog-detail', {
      url: "/blog-detail/:id",
      templateUrl: "views/template.html",
      controller: 'BlogDeatilCtrl'
    })
    .state('blog', {
      url: "/blog",
      templateUrl: "views/template.html",
      controller: 'BlogCtrl'
    });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});
firstapp.directive('autoHeightfixed', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      var addHeight = function() {
        $element.css("height", windowHeight);
      };
      addHeight();
    }
  };
});
firstapp.directive('autoHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $(window).height();
      var addHeight = function() {
        $element.css("min-height", windowHeight);
      };
      addHeight();
    }
  };
});
firstapp.directive('fancyboxBox', function($document) {
  return {
    restrict: 'EA',
    replace: false,
    link: function(scope, element, attr) {
      var $element = $(element);
      var target;
      if (attr.rel) {
        target = $("[rel='" + attr.rel + "']");
      } else {
        target = element;
      }

      target.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        closeBtn: true,
        // autoPlay : true,
        //  playSpeed : 3000,
        //  loop:true,
        helpers: {
          media: {}
        }
      });
    }
  };
});

firstapp.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      var windowHeight = $(window).height();
      if (this.pageYOffset >= windowHeight) {
        // console.log(windowHeight);
        element.addClass('affix');
      } else {
        element.removeClass('affix');
      }
    });
  };
});

firstapp.config(function($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
firstapp.filter('serverimage', function() {
  return function(image) {
    if (image && image !== null) {

      return adminurl + "upload/readFile?file=" + image;
    } else {
      return undefined;
    }
  };
});

firstapp.filter('uploadpath', function() {
  return function(input, width, height, style) {
    var other = "";
    if (width && width !== "") {
      other += "&width=" + width;
    }
    if (height && height !== "") {
      other += "&height=" + height;
    }
    if (style && style !== "") {
      other += "&style=" + style;
    }
    if (input) {
      return imgpath + "?file=" + input + other;
    }
  };
});

// firstapp.filter('uploadpath', function() {
//     return function(input, width, height, style) {
//         var other = "";
//         if (width && width != "") {
//             other += "&width=" + width;
//         }
//         if (height && height != "") {
//             other += "&height=" + height;
//         }
//         if (style && style != "") {
//             other += "&style=" + style;
//         }
//         if (input) {
//             if (input.indexOf('https://') == -1) {
//                 return uploadurl + input + other;
//
//             } else {
//                 return input;
//             }
//         }
//     };
// });
