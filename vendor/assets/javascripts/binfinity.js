$(function(){
  scroller = {
    initialize : function(callback, options) {
      scroller.upCallback = options.upwardScroll;
      scroller.cushion = options.cushion || 50
      scroller.downCallback = callback;
      scroller.start();
    },
    getBottom : function(){ return $(document).height() - ($(window).scrollTop() + $(window).height())},

    start : function() {
      window.onscroll = scroller.iscroll;
    },
    iscroll : function() {
      if (scroller.upCallback) {
        if (window.pageYOffset < 0) {
          scroller.upCallback();
        }
      }

      if (scroller.getBottom() <= scroller.cushion) {
        scroller.downCallback();
      }
    }
  }
});
