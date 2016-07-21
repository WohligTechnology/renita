angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {

    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
        'img/banner/b1.jpg',
        'img/banner/b2.jpg',
        'img/banner/b3.jpg',
        'img/banner/b4.jpg',
        'img/banner/b5.jpg',
        'img/banner/b6.jpg',
        'img/banner/b7.jpg'
    ];
})

.controller('headerctrl', function($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $.fancybox.close(true);
    })
    .controller('ContactCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('AboutUsCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("about-us");
        $scope.menutitle = NavigationService.makeactive("About Us");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('SkinCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("skin");
        $scope.menutitle = NavigationService.makeactive("Skin");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('VitiligoCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("vitiligo");
        $scope.menutitle = NavigationService.makeactive("Vitiligo");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('TermConditionCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("term-condition");
        $scope.menutitle = NavigationService.makeactive("Term Condition");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('DoctorCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("doctor");
        $scope.menutitle = NavigationService.makeactive("Doctor");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.doctor=[{
          img:"img/d1.jpg",
          name:"Dr. Narendra J Pandya",
          spl:"(Dermatologist)",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
          img:"img/d2.jpg",
          name:"Dr. Zarna Parekh",
          spl:"(Dermatologist)",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
          img:"img/d3.jpg",
          name:"Dr. Sarvesh Brahme",
          spl:"(Dermatologist)",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
          img:"img/d4.jpg",
          name:"Dr. Harshit Shah",
          spl:"(Dermatologist)",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
          img:"img/d4.jpg",
          name:"Dr. Harshit Shah",
          spl:"(Dermatologist)",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
          img:"img/d4.jpg",
          name:"Dr. Harshit Shah",
          spl:"(Dermatologist)",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
          img:"img/d4.jpg",
          name:"Dr. Harshit Shah",
          spl:"(Dermatologist)",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
          img:"img/d4.jpg",
          name:"Dr. Harshit Shah",
          spl:"(Dermatologist)",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }]
    })
    .controller('BlogCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("blog");
        $scope.menutitle = NavigationService.makeactive("Blog");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;
