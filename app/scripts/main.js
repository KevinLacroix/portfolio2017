
var Portfolio = typeof Portfolio === 'undefined' ? {} : Portfolio;

var winW = $(window).width(),
    winH = $(window).height(),
    docW = $(document).width(),
    docH = $(document).height(),
    is = {
      desktop: (winW >= 993) ? true : false,
      tablet:  (winW >= 545 && winW <= 992) ? true : false,
      mobile:  (winW <= 544) ? true : false
    };


Portfolio = {

  reSize: function () {
    var id;
    $(window).resize(function() {
      clearTimeout(id);
      id = setTimeout(doneResizing, 500);
    });

    function doneResizing(){
      Portfolio.loadReSize();
    }
  },

  loadReSize: function () {

    winW = $(window).width();
    winH = $(window).height();
    docW = $(document).width();
    docH = $(document).height();

    var is = {
      desktop: (winW >= 993) ? true : false,
      tablet:  (winW >= 545 && winW <= 992) ? true : false,
      mobile:  (winW <= 544) ? true : false
    };

    if ( (is.mobile || is.tablet) ) {
      $('body').addClass('mobile');
    } else {
      $('body').removeClass('mobile');
    }

  },

  // PARALLAX WITH CLOUDS

  moveClouds: function() {
    var $bigHeader = $('#js-big-header');
    var movementStrength2 = 4;
    var movementStrength3 = 6;
    var height2 = movementStrength2 / $(window).height();
    var height3 = movementStrength3 / $(window).height();
    var width2 = movementStrength2 * 5 / $(window).width();
    var width3 = movementStrength3 * 5 / $(window).width();
    $bigHeader.mousemove(function(e) {
      var pageX = e.pageX - ($(window).width() / 2);
      var pageY = e.pageY - ($(window).height() / 2);
      var newvalueX2 = 50 - (width2 * pageX);
      var newvalueX3 = 50 - (width3 * pageX);
      var newvalueY2 = 100 - (height2 * pageY);
      var newvalueY3 = 100 - (height3 * pageY);
      $('.header-big-bg2').css('background-position', newvalueX2+'% '+newvalueY2+'%');
      $('.header-big-bg3').css('background-position', newvalueX3+'% '+newvalueY3+'%');
    });
  },


  // STICKY NAV ON SCROLL

  stickyNav: function() {
    var $body = $('body');
    var $winScrollTop = $(window).scrollTop();
    if ($winScrollTop > 20) {
      $('.header-nav').addClass('is-small');
    } else {
      $('.header-nav').removeClass('is-small');
    }
  },

  bindSticky: function() {
    $(window).bind('scroll', Portfolio.stickyNav);
  },

  activeNavLinks: function() {

    var waypoints = $('.waypoint');
    waypoints.waypoint(function(direction){
      if (direction === "down") {
        var matchingLink = $('a[data-href="#' + this.element.id + '"]');
        $('.header-nav').find('.header-nav-link').removeClass('is-active');
        matchingLink.addClass('is-active');
        console.log("down : " + matchingLink);
      }
    }, {offset: '200px'});

    waypoints.waypoint(function(direction){
      if (direction === "up") {
        var matchingLink = $('a[data-href="#' + this.element.id + '"]');
        $('.header-nav').find('.header-nav-link').removeClass('is-active');
        matchingLink.addClass('is-active');
        console.log("up : " + matchingLink);
      }
    }, {offset: '-200px'});
  },


  // SMOOTH SCROLL FUNCTION

  smoothScroll: function() {
    $('[data-href]').click(function() {
      var button = $(this),
          offset = 70,
          anchor = button.data('href');
      $('html, body').animate({
        scrollTop: $(anchor).offset().top - (is.desktop ? offset : 0)
      }, 'slow');
      return false;
    });
  },

  cogRotate: function() {
    $(window).scroll(function() {
      var wScroll = $(this).scrollTop();
      $('.cog-item').css({
        'transform': 'rotate(' + wScroll / 5 + 'deg)'
      });
      $('.cog-item-opp').css({
        'transform': 'rotate(-' + wScroll / 5 + 'deg)'
      });
    });
  }

};


$(document).ready(function() {

  Portfolio.reSize();
  Portfolio.bindSticky();
  Portfolio.smoothScroll();
  Portfolio.stickyNav();

  // Gears FAQ
  if ( $('.timeline-cogs').length ) {
    Portfolio.cogRotate();
  }

  if ( is.desktop ) {

    Portfolio.activeNavLinks();

    // ANIMATED HEADER BACKGROUNDS

    if ($('#js-big-header').length) {
      animatedHeaderBackgrounds();
    }

    // MOVE CLOUDS

    if ($('#js-big-header').length) {
      Portfolio.moveClouds();
    }

    // PLUGIN FOR DIRECTION-AWARE HOVER EFFECT

    if ($('.portfolio-section').length) {
      $('.project-item').hoverdir({hoverElem: '.project-caption'});
    }

    if ( $('.tagline-animated').length ) {

      $('.typed-insertion1').typed({
        stringsElement: $('.list-keywords1'),
        typeSpeed: 50,
        startDelay: 1000,
        loop: true,
        loopCount: 3,
        backSpeed: 30,
        shuffle: false,
        backDelay: 3000
      });

      $('.typed-insertion2').typed({
        stringsElement: $('.list-keywords2'),
        typeSpeed: 50,
        startDelay: 1000,
        loop: true,
        loopCount: 3,
        backSpeed: 30,
        shuffle: false,
        backDelay: 3000
      });

    }

  }

  // Modal

  if ( $('.project-link').length ) {
    $('#trigger-modal1').animatedModal({
      modalTarget:'animatedModal1',
      animatedIn:'zoomIn',
      animatedOut:'bounceOut',
      color:'rgba(241,96,88,0.96)'
    });

    $('#trigger-modal2').animatedModal({
      modalTarget:'animatedModal2',
      animatedIn:'lightSpeedIn',
      animatedOut:'bounceOutDown',
      color:'rgba(241,96,88,0.96)'
    });

    $('#trigger-modal3').animatedModal({
      modalTarget:'animatedModal3',
      animatedIn:'bounceIn',
      animatedOut:'bounceOut',
      color:'rgba(241,96,88,0.96)'
    });

    $('#trigger-modal4').animatedModal({
      modalTarget:'animatedModal4',
      animatedIn:'zoomIn',
      animatedOut:'bounceOut',
      color:'rgba(241,96,88,0.96)'
    });
  }

});

(function($) {

})(jQuery);

