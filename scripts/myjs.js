$( document ).ready(function() {
    $(".button-collapse").sideNav();
    $('.scrollspy').scrollSpy();
});

var app = angular.module('myApp', []);
app.value('appName', 'MyWebsite');

app.controller('PanelController', function($location) {
  this.tab = 1;
  this.myUrl = $location.absUrl();
  if (this.myUrl.search('#books') !== -1) {
    this.tab = 2;
  } else if (this.myUrl.search('#food') !== -1) {
    this.tab = 3;
  } else if (this.myUrl.search('#work') !== -1) {
    this.tab = 4;
  } else if (this.myUrl.search('#me') !== -1) {
    this.tab = 5;
  }

  this.selectTab = function(setTab) {
    this.tab = setTab;
  }

  this.isSelected = function(checkTab) {
    this.myUrl = $location.absUrl();
    return this.tab === checkTab;
  }
});
