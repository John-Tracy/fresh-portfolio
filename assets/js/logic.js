

  $(window).scroll(function () {  
      if($(window).scrollTop() > 355){
        $('#myNav').addClass('navbar-fixed-top');
      }
      if($(window).scrollTop() < 356 && $('#myNav').hasClass('navbar-fixed-top')){
        $('#myNav').removeClass('navbar-fixed-top')
      }
  });

