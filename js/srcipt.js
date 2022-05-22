$(function () {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        $('#backToTop').fadeIn(1000)
      } else {
        $('#backToTop').fadeOut(1000)
      }
    })
    $(window).on('scroll', function () {

      if ($(window).scrollTop() > $('#header').height()) {
         $('#header').addClass('menu_animate')
      } else {
         $('#header').removeClass('menu_animate')
      }
   })
  
    $('#backToTop').on('click', function () {
      $('html,body').animate({
        scrollTop:0,
      },1000)
    })
    $("a").on("click", function (event) {
        event.preventDefault();
        if (this.hash !== "") {
          var hash = this.hash;
    
          $("html,body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            1000
          );
        }
      });
    $('.banner_slider').slick({
        prevArrow:'<i class="arrow_left fas fa-chevron-left"></i>',
        //prevArrow:'<i class="banner_slider_icon fas fa-arrow-left"></i>',
        nextArrow: '<i class="arrow_right fas fa-chevron-right"></i>',
        //nextArrow: '<i class="banner_slider_icon fas fa-arrow-right"></i>',
        dots: false,
        //dotsClass: 'banner_slider_dots',
        fade:false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed:500,
      })
      $('.slider_about').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


     $('.counter').counterUp({
      delay: 10,
      time: 2000
  });

  $('.course-slider').slick({
    infinite: true,
    prevArrow: '<i class="fa fa-angle-left course-left_arrow"></i>',
    nextArrow: '<i class="fa fa-angle-right course-right_arrow"></i>',
    slidesToShow: 3,
    centerMode: false,
    centerPadding: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
},
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            
            }
},
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
},
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
}

]

});

$('.test_full_slider').slick({
  arrows: true,
  dots: false,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa fa-angle-left test-left_arrow"></i>',
  nextArrow: '<i class="fa fa-angle-right test-right_arrow"></i>',
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
},
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
},
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
}

]

});
$("#pb-calendar").pb_calendar({
    // navigation arrows
    next_month_button: '<i class="fas fa-arrow-right icon"></i>',
    prev_month_button: '<i class="fas fa-arrow-left icon"></i>',
  });

$('.teacher-slide').slick({
  arrows: false,
  dots: false,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa fa-angle-left test-left_arrow"></i>',
  nextArrow: '<i class="fa fa-angle-right test-right_arrow"></i>',
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
},
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
},  
        
      
      {
          breakpoint: 600,
          settings: {
              slidesToShow:2,
              slidesToScroll: 1
          }
},
      
      {
          breakpoint: 481,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
}

]

});

$('.footer_slider').slick({
  arrows: false,
  dots: false,
  autoplay: false,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
},
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
},
      
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
},
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
},
      
       {
          breakpoint: 320,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
},

]

});

})