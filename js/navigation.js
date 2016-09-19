var adminurl = "http://104.154.89.21:86/";  //server
// var adminurl = "http://10.0.0.70:1337/";
// var adminurl = "http://192.168.1.113:84/";
var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";
var uploadurl = imgurl;
// if(isproduction)
// {
//   adminURL =  "http://www.wohlig.co.in/demo/index.php";
// }
// else {
//   adminURL = "http://localhost/demo/index.php";
// }

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [];
    return {
        getnav: function(callback) {
            $http({
                url: adminurl + 'category/getAllCategory',
                method: 'POST'
            }).success(callback);
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        getHomeslider: function(callback) {
            $http({
                url: adminurl + 'Homeslider/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getAllCategory: function(callback) {
            $http({
                url: adminurl + 'Category/getAllCat',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getCatByName: function(id, callback) {
            $http({
                url: adminurl + 'SubCategory/getCatByName',
                method: 'POST',
                withCredentials: true,
                data: {
                    _id: id
                }
            }).success(callback);
        },
        getSubCat: function(id, callback) {
            $http({
                url: adminurl + 'SubCategory/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    _id: id
                }
            }).success(callback);
        }, // GET ALL BLOG BY JAGRUTI
        getAllBlog: function(pagenumber, search, callback) {
            $http({
                url: adminurl + 'blog/getLimited',
                method: 'POST',
                data: {
                    "pagesize": 2,
                    "pagenumber": pagenumber,
                    "search": search
                },
                withCredentials: true
            }).success(callback);
        },
        getPostTags: function(callback) {
            $http({
                url: adminurl + 'blog/getPostTags',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getOneBlog: function(id, callback) {
            $http({
                url: adminurl + 'blog/getOneBlog',
                method: 'POST',
                data: {
                    "_id": id
                },
                withCredentials: true
            }).success(callback);
        },
        getPopularPosts: function(callback) {
            $http({
                url: adminurl + 'blog/getPopularPosts',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        }, // GET ALL BLOG BY JAGRUTI

        getAllDoctor: function(callback) {
            $http({
                url: adminurl + 'Doctor/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getHeaderDoctor: function(callback) {
            $http({
                url: adminurl + 'Header/getHeader',
                method: 'POST',
                data: {
                    "name": "Doctor"
                },
                withCredentials: true
            }).success(callback);
        },
        getHeaderBlog: function(callback) {
            $http({
                url: adminurl + 'Header/getHeader',
                method: 'POST',
                data: {
                    "name": "Blog"
                },
                withCredentials: true
            }).success(callback);
        },
        getHeaderAbout: function(callback) {
            $http({
                url: adminurl + 'Header/getHeader',
                method: 'POST',
                data: {
                    "name": "About"
                },
                withCredentials: true
            }).success(callback);
        },
        getHeaderTestimonial: function(callback) {
            $http({
                url: adminurl + 'Header/getHeader',
                method: 'POST',
                data: {
                    "name": "Testimonial"
                },
                withCredentials: true
            }).success(callback);
        },
        getTestimonial: function(callback) {
            $http({
                url: adminurl + 'testimonial/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getTestimonial: function(callback) {
            $http({
                url: adminurl + 'testimonial/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getHeaderTeam: function(callback) {
            $http({
                url: adminurl + 'Header/getHeader',
                method: 'POST',
                data: {
                    "name": "Team"
                },
                withCredentials: true
            }).success(callback);
        },
        getHeaderContact: function(callback) {
            $http({
                url: adminurl + 'Header/getHeader',
                method: 'POST',
                data: {
                    "name": "Contact"
                },
                withCredentials: true
            }).success(callback);
        },
        getAllBefore: function(callback) {
            $http({
                url: adminurl + 'beforeafter/getAllBefore',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        getOnebeforeafter: function(id, callback) {
            $http({
                url: adminurl + 'beforeafter/getone',
                method: 'POST',
                data: {
                    "_id": id
                },
                withCredentials: true
            }).success(callback);
        },
        getHeaderBefore: function(callback) {
            $http({
                url: adminurl + 'Header/getHeader',
                method: 'POST',
                data: {
                    "name": "Before"
                },
                withCredentials: true
            }).success(callback);
        },
        getDoctorSlider:function(callback){
          $http({
              url: adminurl + 'doctor/getAll',
              method: 'POST',
              withCredentials: true
          }).success(callback);
        }
    };
});
