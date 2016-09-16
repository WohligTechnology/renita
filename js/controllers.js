angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper', 'infinite-scroll'])


.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {

        $scope.template = TemplateService.changecontent("home");
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();

        NavigationService.getHomeslider(function(data) {
            $scope.Homeslider = data.data;
            console.log("$scope.Homeslider", $scope.Homeslider.length);
            // _.each($scope.Homeslider,function(key){
            //   key.url=key.url.split('/');
            //   console.log("key.url",key.url);
            // })

        });


        $scope.mySlides = [{
                img: "img/banner/bo.jpg",
                image: "img/banner/1.png",
                link: ""
            }, {
                img: "img/banner/m1.jpg",
                image: "img/banner/5.png",
                link: ""
            }, {
                img: "img/banner/md1.jpg",
                image: "img/banner/6.png",
                link: ""
            }, {
                img: "img/banner/s1.jpg",
                image: "img/banner/3.png",
                link: "skin"
            }, {
                img: "img/banner/t1.jpg",
                image: "img/banner/2.png",
                link: ""
            }, {
                img: "img/banner/v1.jpg",
                image: "img/banner/4.png",
                link: "vitiligo"
            }
        ];
        $scope.homes = [{
                img: "img/1.jpg",
                image: "img/banner/1.png",
                link: ""
            }, {
                img: "img/1.jpg",
                image: "img/banner/5.png",
                link: ""
            }, {
                img: "img/1.jpg",
                image: "img/banner/6.png",
                link: ""
            }, {
                img: "img/1.jpg",
                image: "img/banner/3.png",
                link: "skin"
            }, {
                img: "img/1.jpg",
                image: "img/banner/2.png",
                link: ""
            }, {
                img: "img/1.jpg",
                image: "img/banner/4.png",
                link: "vitiligo"
            }
        ];
    })
    .controller('navCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        NavigationService.getnav(function(data) {
            $scope.navigation = data.data;
            console.log("  $scope.navigation", $scope.navigation);
        });
    })
    .controller('headerctrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        var get = false;
        $scope.getslide = "menu-out";
        $scope.getNav = function() {
            if ($scope.getslide == "menu-in") {
                $scope.getslide = "menu-out";
                $scope.onebar = "";
                $scope.secondbar = "";
                $scope.thirdbar = "";
                $scope.buttonpos = "";
            } else {
                $scope.getslide = "menu-in";
                $scope.onebar = "firstbar";
                $scope.secondbar = "secondbar";
                $scope.thirdbar = "thirdbar";
                $scope.buttonpos = "hidden";
            }
        };
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $.fancybox.close(true);

        NavigationService.getAllCategory(function(data) {
            $scope.categories = data.data;
        })

    })

.controller('ContactCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();

        NavigationService.getHeaderContact(function(data) {
            $scope.conatctHeader = data.data;
            console.log("$scope.conatctHeader", $scope.conatctHeader);
        })
    })
    .controller('AboutUsCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("about-us");
        $scope.menutitle = NavigationService.makeactive("About Us");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();
        NavigationService.getHeaderAbout(function(data) {
            $scope.headerAbout = data.data;
            console.log("$scope.headerAbout", $scope.headerAbout);
        })
    })
    .controller('TestimonialCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("testimonial");
        $scope.menutitle = NavigationService.makeactive("Testimonial");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();

        NavigationService.getHeaderTestimonial(function(data) {
            $scope.testimonialHeader = data.data;

        });
        NavigationService.getTestimonial(function(data) {
            $scope.Testimonial = data.data;
            console.log("Testimonial",$scope.Testimonial);

        })

        $scope.testslide = [{
            name: "Lorem Ipsum",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }, {
            name: "Lorem Phirse",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }];
    })
    .controller('TeamCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("team");
        $scope.menutitle = NavigationService.makeactive("Team");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();
        NavigationService.getHeaderTeam(function(data) {
            $scope.teamHeader = data.data;

        })
    })

.controller('SkinCtrl', function($scope, TemplateService, NavigationService, $stateParams, $timeout, $state) {
        $scope.template = TemplateService.changecontent("skin");
        $scope.menutitle = NavigationService.makeactive("Skin");
        TemplateService.title = $scope.menutitle;
        NavigationService.getCatByName($stateParams.id, function(data) {
            console.log(data.data);
            if (data.data != '' && data.value) {
                $scope.category = data.data;
                console.log("$scope.category", $scope.category);
                console.log("innn", $stateParams.subid);
                if ($stateParams.subid) {
                    $scope.tabActive($stateParams.subid, 0);
                } else {
                    $scope.tabActive($scope.category[0]._id, 0);
                }

            } else {
                $state.go('home');
            }
        });
        $scope.tabActive = function(id, indexid) {
          NavigationService.getSubCat(id, function(data) {
              $scope.subCategory = data.data;
            $scope.subCatid = id;
            _.each($scope.category, function(key) {
              key.style = {};
              key.stylea = {};
                if (key._id == id) {
                    key.activetab = true;
                    key.style = {
                      "background-color" : $scope.subCategory.color
                    };
                    key.stylea = {
                      "color":"black"
                    };
                } else {
                    key.activetab = false;
                    key.style ={};

                }
            });
            // $scope.category[indexid].activetab = true;


                console.log("  $scope.subCategory ", $scope.subCategory);

            });

        };

    })
    .controller('PrivacyCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("privacy");
        $scope.menutitle = NavigationService.makeactive("Privacy");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();
    })
    .controller('VitiligoCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("vitiligo");
        $scope.menutitle = NavigationService.makeactive("Vitiligo");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();
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
    .controller('BeforeCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("before");
        $scope.menutitle = NavigationService.makeactive("Before & After");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();
        $scope.tabs = 'acne';
        $scope.classa = 'active-tab';
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = '';
        $scope.classe = '';
        $scope.classf = '';
        $scope.classg = '';
        $scope.classh = '';
        $scope.classi = '';
        $scope.classj = '';

        NavigationService.getHeaderBefore(function(data) {
            $scope.headerBefore = data.data;

        })

        NavigationService.getAllBefore(function(data) {
            $scope.before = data.data;
            console.log("  $scope.before", $scope.before);
            $scope.tabActive($scope.before[0]._id, 0);
        })

        $scope.tabActive = function(id, indexid) {
            $scope.subCatid = id;
            _.each($scope.before, function(key) {
                key.activetab = false;
            });
            $scope.before[indexid].activetab = true;
            NavigationService.getOnebeforeafter(id, function(data) {
                $scope.subCategoryBefore = data.data;

            })

        };




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
                $scope.classj = '';

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
                $scope.classj = '';
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
                $scope.classj = '';
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
                $scope.classj = '';
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
                $scope.classj = '';
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
                $scope.classj = '';
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
                $scope.classj = '';
            } else if (a == 8) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = '';
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = 'active-tab';
                $scope.classi = '';
                $scope.classj = '';
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
                $scope.classj = '';
            } else if (a == 10) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = '';
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
                $scope.classi = '';
                $scope.classj = 'active-tab';
            }

        };
    })
    .controller('ClinicPolicyCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("Clinic-Policy");
        $scope.menutitle = NavigationService.makeactive("Clinic Policy");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();
    })
    .controller('ConsultantCtrl', function($scope, TemplateService, NavigationService,$uibModal,$timeout) {

        $scope.template = TemplateService.changecontent("consultant");
        $scope.menutitle = NavigationService.makeactive("Consultant");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        NavigationService.getAllDoctor(function(data) {
            $scope.doctor = data.data;
            // console.log("doctorasxdfghj", $scope.doctor);

        });

        NavigationService.getHeaderDoctor(function(data) {
            $scope.doctorHeader = data.data;
            // console.log("  $scope.doctorHeader", $scope.doctorHeader);
        });
        NavigationService.getDoctorSlider(function(data) {
            $scope.doctorSlider = data.data;
            $scope.allDocs = _.cloneDeep($scope.doctorSlider);
            console.log("$scope.doctorSlider", $scope.doctorSlider);
        });

        $scope.doctors = [{
          img: "img/d1.jpg",
          name: "Dr. Narendra J Pandya",
          spl: "(Dermatologist)",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }, {
          img: "img/d2.jpg",
          name: "Dr. Zarna Parekh",
          spl: "(Dermatologist)",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }, {
          img: "img/d3.jpg",
          name: "Dr. Sarvesh Brahme",
          spl: "(Dermatologist)",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }, {
          img: "img/d4.jpg",
          name: "Dr. Harshit Shah",
          spl: "(Dermatologist)",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }, {
          img: "img/d4.jpg",
          name: "Dr. Narendra Shah",
          spl: "(Dermatologist)",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }, {
          img: "img/d4.jpg",
          name: "Dr. Narendra Shah",
          spl: "(Dermatologist)",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }, {
          img: "img/d4.jpg",
          name: "Dr. Narendra Shah",
          spl: "(Dermatologist)",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }, {
          img: "img/d4.jpg",
          name: "Dr. Harshit Shah",
          spl: "(Dermatologist)",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        }];
        // $scope.doctor = [{
        //   img: "img/d1.jpg",
        //   name: "Dr. Narendra J Pandya",
        //   spl: "(Dermatologist)",
        //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        // }, {
        //   img: "img/d2.jpg",
        //   name: "Dr. Zarna Parekh",
        //   spl: "(Dermatologist)",
        //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        // }, {
        //   img: "img/d3.jpg",
        //   name: "Dr. Sarvesh Brahme",
        //   spl: "(Dermatologist)",
        //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        // }, {
        //   img: "img/d4.jpg",
        //   name: "Dr. Harshit Shah",
        //   spl: "(Dermatologist)",
        //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        // }, {
        //   img: "img/d4.jpg",
        //   name: "Dr. Narendra Shah",
        //   spl: "(Dermatologist)",
        //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        // }, {
        //   img: "img/d4.jpg",
        //   name: "Dr. Narendra Shah",
        //   spl: "(Dermatologist)",
        //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        // }, {
        //   img: "img/d4.jpg",
        //   name: "Dr. Narendra Shah",
        //   spl: "(Dermatologist)",
        //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        // }, {
        //   img: "img/d4.jpg",
        //   name: "Dr. Harshit Shah",
        //   spl: "(Dermatologist)",
        //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        // }]
        $scope.nextDoctor = function () {
          var newarr = $scope.allDocs;
          var startArr = _.slice(newarr, 0, 1);
          var endArr = _.slice(newarr, 1);
          $scope.allDocs = _.union(endArr,startArr);
          _.each($scope.allDocs,function (key) {
            key.active = false;
          });
          $scope.allDocs[0].active = true;
        };
        $scope.reAssemble = function (index,inSlider) {
          if(inSlider){
            $scope.doctorSliders = $scope.allDocs;
          }else{
            $scope.doctorSliders = $scope.doctorSlider;
          }
          var startArr = _.slice($scope.doctorSliders, 0, index);
          var endArr = _.slice($scope.doctorSliders, index);
          $scope.allDocs = _.union(endArr, startArr);
        };
        $scope.openModal = function(index) {
          $scope.reAssemble(index,false);
          console.log($scope.allDocs);
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/modal/slider.html',
                // controller: 'ConsultantCtrl',
                scope:$scope.$new(),
                size: 'lg',
                windowClass: 'slider-modal',
            });
        };
    })
    .controller('BlogCtrl', function($scope, TemplateService, NavigationService) {

        $scope.template = TemplateService.changecontent("blog");
        $scope.menutitle = NavigationService.makeactive("Blog");
        TemplateService.title = $scope.menutitle;
        // $scope.navigation = NavigationService.getnav();
        $scope.blogmsg = "Loading...";
        $scope.popularmsg = "Loading...";
        $scope.tagmsg = "Loading...";

        // GET ALL BLOG BY JAGRUTI
        // BLOG PAGINATION
        $scope.pagenumber = 1;
        $scope.blog = [];
        $scope.shouldscroll = false;
        $scope.search = {};
        $scope.search.search = "";
        $scope.loadnotification = function(pageno) {
            NavigationService.getAllBlog(pageno, $scope.search.search, function(data) {

                _.each(data.data.data, function(n) {
                    $scope.blog.push(n);
                })

                if (data.data.data == "") {
                    $scope.shouldscroll = true;
                }
                if ($scope.blog.length == 0) {
                    $scope.blogmsg = "No Blogs.";
                } else {
                    $scope.blogmsg = "";
                }
            });

            $scope.$broadcast('scroll.infiniteScrollComplete');
            $scope.$broadcast('scroll.refreshComplete');
        }

        $scope.loadnotification(1);

        $scope.loadMore = function() {
            console.log("in notification");
            $scope.loadnotification(++$scope.pagenumber);
        };

        //  SEARCH BLOG
        $scope.doSearch = function() {
            $scope.pagenumber = 1;
            $scope.blog = [];
            $scope.shouldscroll = false;
            $scope.loadnotification(1);
        }

        //  POPULAR POST AND TAGS
        $scope.post = [];
        $scope.tags = [];
        NavigationService.getPostTags(function(data) {
            $scope.post = data.data.popularposts;
            $scope.tags = data.data.tags;
            if ($scope.post == '') {
                $scope.popularmsg = "No Popular Posts."
            } else {
                $scope.popularmsg = "";
            }
            if ($scope.tags == '') {
                $scope.tagmsg = "No Tags."
            } else {
                $scope.tagmsg = "";
            }
        });
        // GET ALL BLOG BY JAGRUTI
        NavigationService.getHeaderBlog(function(data) {
            $scope.blogHeader = data.data;
            console.log("$scope.blogHeader", $scope.blogHeader);
        })


    })

.controller('BlogDeatilCtrl', function($scope, TemplateService, NavigationService, $state) {

    $scope.template = TemplateService.changecontent("blog-detail");
    $scope.menutitle = NavigationService.makeactive("Blog Detail");
    TemplateService.title = $scope.menutitle;
    // $scope.navigation = NavigationService.getnav();
    $scope.popularmsg = "Loading...";
    $scope.tagmsg = "Loading...";

    //  BLOG DETAIL BY JAGRUTI
    $scope.popular = [];
    $scope.blog = [];
    //  GET BLOG DETAIL
    NavigationService.getOneBlog($state.params.id, function(data) {
        console.log(data);
        $scope.blog = data.data;
        if ($scope.blog.blog.tag == "") {
            $scope.tagmsg = "No Tags.";
        } else {
            $scope.tagmsg = "";
        }
    });
    //  GET POPULAR POST
    NavigationService.getPopularPosts(function(data) {
        $scope.popular = data.data;
        if ($scope.popular == "") {
            $scope.popularmsg = "No Popular Post.";
        } else {
            $scope.popularmsg = "";
        }
    });
    //  BLOG DETAIL BY JAGRUTI

})

.controller('footerctrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    NavigationService.getAllCategory(function(data) {
        $scope.footer = data.data;
        console.log("$scope.footer", $scope.footer);
    })
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
