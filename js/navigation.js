var adminurl = "http://104.154.89.21:80/";
var adminurl = "http://192.168.0.105:1337/";
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
    getnav: function() {
      $http({
        url: adminurl + 'subcategory/getAllCat',
        method: 'POST',
        withCredentials: true
      }).success(function(data) {
        var group = _.groupBy(data.data, "category.name");
        console.log(group);
        _.each(group, function(value, key) {
          console.log(value);
          // var abc={
          //   name: key,
          //   classis: "active",
          //   anchor: value[0].catgeory.anchor,
          //   colours: value[0].catgeory.anchor
          // };
          // if (value.length > 0) {
          //   _.each(value,function(n){
          //     abc.subnav.push({
          //       name:
          //     });
          //   });
          // }
          // navigation.push(abc);
        });
        console.log(navigation);
        // var navigation = [{
        //   name: "Skin",
        //   classis: "active",
        //   anchor: "skin",
        //   colours: "borskin"
        // }, {
        //   name: "Hair & Scalp",
        //   classis: "active",
        //   anchor: "hairscalp",
        //   colours: "borhair",
        //   subnav: [{
        //     name: "Hair Loss",
        //     classis: "active",
        //     anchor: "hair"
        //   }, {
        //     name: "Dandruff",
        //     classis: "active",
        //     anchor: "dandruff"
        //   }, {
        //     name: "Weathered Hair",
        //     classis: "active",
        //     anchor: "weatheredhair"
        //   }, {
        //     name: "Hair Maintenance",
        //     classis: "active",
        //     anchor: "hairmaintenance"
        //   }]
        // }, {
        //   name: "Body",
        //   classis: "active",
        //   anchor: "body",
        //   colours: "borbody"
        // }, {
        //   name: "Men",
        //   classis: "active",
        //   anchor: "men",
        //   colours: "bormen"
        // }, {
        //   name: "Treatments",
        //   classis: "active",
        //   anchor: "treatment",
        //   colours: "bortreat"
        // }, {
        //   name: "Mummy Derm",
        //   classis: "active",
        //   anchor: "mummyderm",
        //   colours: "borderm"
        // }, {
        //   name: "Vitiligo",
        //   classis: "active",
        //   anchor: "vitiligo",
        //   colours: "borviti"
        // }];
        // return navigation;
      });
    },

    makeactive: function(menuname) {
      //   for (var i = 0; i < navigation.length; i++) {
      //     if (navigation[i].name == menuname) {
      //       navigation[i].classis = "active";
      //     } else {
      //       navigation[i].classis = "";
      //     }
      //   }
      //   return menuname;
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
  };
});
