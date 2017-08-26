$(function() {

  var $win              = $(window),
      $win_height       = $(window).height(),
      noMoreFades       = false,
      windowPercentage  = ($(window).height() / 1.1),
      isTouch           = (Modernizr.touch),
      lastInstance      = $('.page-footer').find('.js-scroll-reveal');

  // No animations for mobiles
  if (isTouch) {
    $('.js-scroll-reveal').addClass('was-animated');
  }

  $win.on('scroll', scrollReveal);

  function scrollReveal() {
    var scrolled = $win.scrollTop();

    if (lastInstance.hasClass('was-animated')) {
      noMoreFades = true;
    }

    $('.js-scroll-reveal:not(.was-animated)').each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + windowPercentage > offsetTop || $win_height > offsetTop) {

        // Anim pulse
        if ($this.hasClass('js-pulse')) {
          $this.addClass('was-animated anim-pulse');
        }
        // Anim flipInX
        else if ($this.hasClass('js-flipInX')) {
          $this.addClass('was-animated anim-flipInX');
        }
        // Anim fadeInUp
        else if ($this.hasClass('js-fadeInUp')) {
          $this.addClass('was-animated anim-fadeInUp');
        }
        // Anim bounceIn
        else if ($this.hasClass('js-bounceIn')) {
          $this.addClass('was-animated anim-bounceIn');
        }
        // Anim bounceInLeft
        else if ($this.hasClass('js-bounceInLeft')) {
          $this.addClass('was-animated anim-bounceInLeft');
        }
        // Anim bounceInRight
        else if ($this.hasClass('js-bounceInRight')) {
          $this.addClass('was-animated anim-bounceInRight');
        }

        // Second

        // Anim flipInX
        else if ($this.hasClass('js-flipInX-second')) {
          window.setTimeout(function(){
            $this.addClass('was-animated anim-flipInX');
          }, 400);
        }
        // Anim fadeInUp
        else if ($this.hasClass('js-fadeInUp-second')) {
          window.setTimeout(function(){
            $this.addClass('was-animated anim-fadeInUp');
          }, 400);
        }
        // Anim bounceInLeft
        else if ($this.hasClass('js-bounceInLeft-second')) {
          window.setTimeout(function(){
            $this.addClass('was-animated anim-bounceInLeft');
          }, 400);
        }
        // Anim bounceInRight
        else if ($this.hasClass('js-bounceInRight-second')) {
          window.setTimeout(function(){
            $this.addClass('was-animated anim-bounceInRight');
          }, 400);
        }

        // Third

        // Anim flipInX
        else if ($this.hasClass('js-flipInX-third')) {
          window.setTimeout(function(){
            $this.addClass('was-animated anim-flipInX');
          }, 800);
        }
        // Anim fadeInUp
        else if ($this.hasClass('js-fadeInUp-third')) {
          window.setTimeout(function(){
            $this.addClass('was-animated anim-fadeInUp');
          }, 800);
        }

        // FOURTH

        // Anim flipInX
        else if ($this.hasClass('js-flipInX-fourth')) {
          window.setTimeout(function(){
            $this.addClass('was-animated anim-flipInX');
          }, 1200);
        }

        // SKILLBAR WIDTH ON SKILL PAGE

        else if ($this.hasClass('skill-bar-inner')) {
          //setTimeout(function() {
            $this.css('width', $this.data('percent'));
            $this.addClass('was-animated');
          // }, 50);
        }

        // Default

        // Anim flipInX
        else {
          $(this).addClass('was-animated anim-flipInX');
        }
      }
    });
  }

  scrollReveal();
});
