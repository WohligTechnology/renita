angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {

    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [{
      img:"img/banner/b1.jpg",
      image:"img/banner/b1-1.jpg"
    },{
      img:"img/banner/b2.jpg",
      image:"img/banner/b2-2.jpg"
    },{
      img:"img/banner/b3.jpg",
      image:"img/banner/b3-3.jpg"
    },{
      img:"img/banner/b4.jpg",
      image:"img/banner/b4-4.jpg"
    },{
      img:"img/banner/b5.jpg",
      image:"img/banner/b5-5.jpg"
    },{
      img:"img/banner/b6.jpg",
      image:"img/banner/b6-6.jpg"
    },{
      img:"img/banner/b7.jpg",
      image:"img/banner/b7-7.jpg"
    }
    //   {
    //   img:"img/banner/b1.jpg",
    //   image:"img/banner/b1_second.jpg"
    // },{
    //   img:"img/banner/b2.jpg",
    //   image:"img/banner/b2_second.jpg"
    // },{
    //   img:"img/banner/b3.jpg",
    //   image:"img/banner/b3_second.jpg"
    // },{
    //   img:"img/banner/b4.jpg",
    //   image:"img/banner/b4_second.jpg"
    // },{
    //   img:"img/banner/b5.jpg",
    //   image:"img/banner/b5_second.jpg"
    // },{
    //   img:"img/banner/b6.jpg",
    //   image:"img/banner/b6_second.jpg"
    // },{
    //   img:"img/banner/b7.jpg",
    //   image:"img/banner/b7_second.jpg"
    // }
        //'img/banner/b1.jpg',
        // 'img/banner/b2.jpg',
        // 'img/banner/b3.jpg',
        // 'img/banner/b4.jpg',
        // 'img/banner/b5.jpg',
        // 'img/banner/b6.jpg',
        // 'img/banner/b7.jpg'
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
        $scope.tabs = 'acre';
        $scope.classa = 'active-tab';
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = '';
        $scope.classe = '';
        $scope.classf = '';
        $scope.classg = '';
        $scope.classh = '';
        $scope.classi = '';


        $scope.tabchanges = function(tabs, a) {
            //        console.log(tab);
            $scope.tabs = tabs;
            if (a == 1) {

              $scope.classa = 'active-tab';
              $scope.classb = '';
              $scope.classc = '';
              $scope.classd = '';
              $scope.classe = '';
              $scope.classf = '';
              $scope.classg = '';
              $scope.classh = '';
              $scope.classi = '';

            } else if (a == 2) {

              $scope.classa = '';
              $scope.classb = 'active-tab';
              $scope.classc = '';
              $scope.classd = '';
              $scope.classe = '';
              $scope.classf = '';
              $scope.classg = '';
              $scope.classh = '';
              $scope.classi = '';
            } else if (a == 3) {

              $scope.classa = '';
              $scope.classb = '';
              $scope.classc = 'active-tab';
              $scope.classd = '';
              $scope.classe = '';
              $scope.classf = '';
              $scope.classg = '';
              $scope.classh = '';
              $scope.classi = '';
            } else if (a == 4) {

              $scope.classa = '';
              $scope.classb = '';
              $scope.classc = '';
              $scope.classd = 'active-tab';
              $scope.classe = '';
              $scope.classf = '';
              $scope.classg = '';
              $scope.classh = '';
              $scope.classi = '';
            } else if (a == 5) {

              $scope.classa = '';
              $scope.classb = '';
              $scope.classc = '';
              $scope.classd = '';
              $scope.classe = 'active-tab';
              $scope.classf = '';
              $scope.classg = '';
              $scope.classh = '';
              $scope.classi = '';
            } else if (a == 6) {

              $scope.classa = '';
              $scope.classb = '';
              $scope.classc = '';
              $scope.classd = '';
              $scope.classe = '';
              $scope.classf = 'active-tab';
              $scope.classg = '';
              $scope.classh = '';
              $scope.classi = '';
            } else if (a == 7) {

              $scope.classa = '';
              $scope.classb = '';
              $scope.classc = '';
              $scope.classd = '';
              $scope.classe = '';
              $scope.classf = '';
              $scope.classg = 'active-tab';
              $scope.classh = '';
              $scope.classi = '';
            }else if (a == 8) {

              $scope.classa = '';
              $scope.classb = '';
              $scope.classc = '';
              $scope.classd = '';
              $scope.classe = '';
              $scope.classf = '';
              $scope.classg = '';
              $scope.classh = 'active-tab';
              $scope.classi = '';
            } else if (a == 9) {

              $scope.classa = '';
              $scope.classb = '';
              $scope.classc = '';
              $scope.classd = '';
              $scope.classe = '';
              $scope.classf = '';
              $scope.classg = '';
              $scope.classh = '';
              $scope.classi = 'active-tab';
            }
        };
    })
    .controller('PrivacyCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("privacy");
        $scope.menutitle = NavigationService.makeactive("Privacy");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('VitiligoCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("vitiligo");
        $scope.menutitle = NavigationService.makeactive("Vitiligo");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.tabs = 'first';
        $scope.classp = 'active-tab';
        $scope.classv = '';


        $scope.tabchanges = function(tabs, a) {
            //        console.log(tab);
            $scope.tabs = tabs;
            if (a == 1) {

                $scope.classp = "active-tab";
                $scope.classv = '';

            } else {

                $scope.classp = '';
                $scope.classv = "active-tab";
            }
        };
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
          name:"Dr. Narendra Shah",
          spl:"(Dermatologist)",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
          img:"img/d4.jpg",
          name:"Dr. Narendra Shah",
          spl:"(Dermatologist)",
          desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        },{
          img:"img/d4.jpg",
          name:"Dr. Narendra Shah",
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

        $scope.blog=[{
          img:"img/bb4.jpg",
          name:"The expert route to getting the best lips in town!",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        },{
          img:"img/bb1.jpg",
          name:"Do HCG injections really work for weight loss?",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        },{
          img:"img/bb2.jpg",
          name:"The expert route to getting the best lips in town!",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        },{
          img:"img/bb4.jpg",
          name:"The expert route to getting the best lips in town!",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        },{
          img:"img/bb3.jpg",
          name:"The expert route to getting the best lips in town!",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        },{
          img:"img/bb4.jpg",
          name:"The expert route to getting the best lips in town!",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        }]

    })
    .controller('BlogDeatilCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("blog-detail");
        $scope.menutitle = NavigationService.makeactive("Blog Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.blog=[{
          img:"img/bb4.jpg",
          name:"The expert route to getting the best lips in town!",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        },{
          img:"img/bb1.jpg",
          name:"Do HCG injections really work for weight loss?",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        },{
          img:"img/bb2.jpg",
          name:"The expert route to getting the best lips in town!",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        },{
          img:"img/bb4.jpg",
          name:"The expert route to getting the best lips in town!",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        },{
          img:"img/bb3.jpg",
          name:"The expert route to getting the best lips in town!",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        },{
          img:"img/bb4.jpg",
          name:"The expert route to getting the best lips in town!",
          date:"Saturday, 23 January 2016",
          desc:"We laugh, we smile, we yap. we chat, we sip, we lick, we pout, we kiss! Our lips are pretty much among the heavy duty organs we have - pausing to rest only when we wind down for the night...."
        }]

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
