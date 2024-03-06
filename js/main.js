$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /************************************ Navbar ************************************/
  if ($(window).width() < 992) {
    $(".menu-btn").click(function () {
      if ($(".header-nav").is(":visible")) {
        $(".menu-btn").removeClass("active");
        $(".header-nav").removeClass("active");
        $("body").removeClass("overflow");
        setTimeout(function () {
          $(".header-nav").hide();
        }, 500);
      } else {
        $(".header-nav").show();
        setTimeout(function () {
          $(".menu-btn").addClass("active");
          $(".header-nav").addClass("active");
          $("body").addClass("overflow");
        }, 1);
      }
    });
  }
  /************************************ Services Slider ************************************/
  var servicesSwiper = new Swiper(".services-slider .swiper", {
    a11y: {
      enabled: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: true,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
        loop: false,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
      },
    },
    pagination: {
      el: ".services-slider .slider-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
});
