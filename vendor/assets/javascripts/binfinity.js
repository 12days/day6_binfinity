$(function(){
  scroller = {
    initialize : function(callback, options) {
      if (options) {
        if (typeof(options.upwardScroll) == 'function') {
          scroller.upscroll = true;
          scroller.upCallback = options.upwardScroll;
        } else {
          scroller.upscroll = false;
        };
        if (options.cushion) {
          scroller.cushion = options.cushion;
        } else {
          scroller.cushion = 50;
        }
      } else {
        scroller.cushion = 50;
      };
      scroller.downCallback = callback;
      scroller.start();
    },
    getBottom : function(){ return $(document).height() - ($(window).scrollTop() + $(window).height())},

    start : function() {
      window.onscroll = scroller.iscroll;
    },
    iscroll : function() {
      if (scroller.upscroll == true) {
        if (window.pageYOffset < 0) {
          scroller.upCallback();
        }
      }

      if (scroller.getBottom() <= scroller.cushion) {
        scroller.downCallback();
      }
    }
  }
  var scroll_func = function() {
    add_div();
  }

  // you can add your own callbacks
  var add_div = function() { $('body').append('<div>this is more stuff</div>'); };
  var prepend_func = function() { $($('body').children()[0]).prepend($('<div>PREPEND TEH DATA</div>  '))};

  scroller.initialize(scroll_func, {upwardScroll: prepend_func })
});
