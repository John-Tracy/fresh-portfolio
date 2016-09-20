

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
     
      if($(window).scrollTop() > 320){
        $('#myNav').addClass('navbar-fixed-top');
      }
      if($(window).scrollTop() < 321 && $('#myNav').hasClass('navbar-fixed-top')){
        $('#myNav').removeClass('navbar-fixed-top')
      }
    // if ($(window).scrollTop() > 280) {
    //   $('#nav_bar').addClass('navbar-fixed');
    // }
    // if ($(window).scrollTop() < 281) {
    //   $('#nav_bar').removeClass('navbar-fixed');
    //}
  });