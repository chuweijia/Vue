import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import $ from 'jquery'
require('./assets/css/layout.css')

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  hashbang : false,
  history : false
});

let app = Vue.extend({});

routerMap(router)

router.start(app,"#app");


/**
 * global function
 * @use-like : Tools.prevent
 */
global.Tools = {
  winHeight : $(window).height(),
  myScroll : {},
  prevent : function (event) {
    event.preventDefault();
  },
  tips : function(msg) {
    // $(".layer-tips").hide();
    // var $tips = $(".layer-tips");
    // if ($tips.is(":hidden")) {
    //   $tips.hide();
    //   $tips.find("p").text(msg);
    //   var bh = $tips.height();
    //   var bw = $tips.width();
    //   var wh = $(window).height();
    //   var ww = $(window).width();
    //   var h = (wh - bh) / 2;
    //   var w = (ww - bw) / 2;
    //   $tips.css({"top": h, "left": w});
    //   $tips.show();
    // } else {
    //   return false;
    // }
  }
};
