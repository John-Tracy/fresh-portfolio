

  // $(window).scroll(function () {  
  //     if($(window).scrollTop() > 355){
  //       $('#myNav').addClass('navbar-fixed-top');
  //     }
  //     if($(window).scrollTop() < 356 && $('#myNav').hasClass('navbar-fixed-top')){
  //       $('#myNav').removeClass('navbar-fixed-top')
  //     }
  // });
var docHeight = $(document).height()

$('#bg-holder').css("height", docHeight);


$(window).scroll(function () { 

   $('#bg-holder').css({
      'top' : -($(this).scrollTop()/3)+"px"
   }); 

})