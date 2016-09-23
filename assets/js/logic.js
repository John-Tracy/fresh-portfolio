

  $(window).scroll(function () {  
      if($(window).scrollTop() > 320){
        $('#myNav').addClass('navbar-fixed-top');
      }
      if($(window).scrollTop() < 321 && $('#myNav').hasClass('navbar-fixed-top')){
        $('#myNav').removeClass('navbar-fixed-top')
      }
  });

