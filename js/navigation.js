var adminurl = "http://192.168.1.113:80/";
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

  var navigation = [{
    name: "Skin",
    classis: "active",
    anchor: "skin",
    colours:"borskin"
  },{
    name: "Hair & Scalp",
    classis: "active",
    anchor: "hairscalp",
    colours:"borhair",
    subnav: [{
      name: "Hair Loss",
      classis: "active",
      anchor: "hair"
    },{
      name: "Dandruff",
      classis: "active",
      anchor: "dandruff"
    },{
      name: "Weathered Hair",
      classis: "active",
      anchor: "weatheredhair"
    },{
      name: "Hair Maintenance",
      classis: "active",
      anchor: "hairmaintenance"
    }]
  },{
    name: "Body",
    classis: "active",
    anchor: "body",
    colours:"borbody"
  },{
    name: "Men",
    classis: "active",
    anchor: "men",
    colours:"bormen"
  },{
    name: "Treatments",
    classis: "active",
    anchor: "treatment",
    colours:"bortreat"
  },{
    name: "Mummy Derm",
    classis: "active",
    anchor: "mummyderm",
    colours:"borderm"
  },{
    name: "Vitiligo",
    classis: "actives",
    anchor: "vitiligo",
    colours:"borviti"
  }];

  return {
    getnav: function() {
      return navigation;
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
getCatByName:function(id,callback){
  $http({
    url:adminurl+'SubCategory/getCatByName',
    method:'POST',
    withCredentials:true,
    data: {
        _id: id
    }
  }).success(callback);
},
getSubCat:function(id,callback){
  $http({
    url:adminurl+'SubCategory/getOne',
    method:'POST',
    withCredentials:true,
    data: {
        _id: id
    }
  }).success(callback);
},




  };
});
