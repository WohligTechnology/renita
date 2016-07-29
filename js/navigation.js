var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Home",
    classis: "active",
    anchor: "/"
  },{
    name: "Skin",
    classis: "active",
    anchor: "skin"
  },{
    name: "Hair & Scalp",
    classis: "active",
    anchor: "hairscalp"
  },{
    name: "Body",
    classis: "active",
    anchor: "body"
  },{
    name: "Mummy Derm",
    classis: "active",
    anchor: "mummyderm"
  },{
    name: "About Us",
    classis: "active",
    anchor: "about-us"
  },{
    name: "Blog",
    classis: "active",
    anchor: "blog"
  },{
    name: "Before & After",
    classis: "active",
    anchor: "/"
  },{
    name: "Skin",
    classis: "active",
    anchor: "skin"
  },{
    name: "Hair",
    classis: "active",
    anchor: "/"
  },{
    name: "Diet",
    classis: "active",
    anchor: "/"
  },{
    name: "Treatment in Focus",
    classis: "active",
    anchor: "/"
  },{
    name: "Privacy Policy",
    classis: "active",
    anchor: "privacy"
  },{
    name: "Terms & Conditions",
    classis: "active",
    anchor: "term-condition"
  },{
    name: "Contact Us",
    classis: "active",
    anchor: "contact"
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

  };
});
