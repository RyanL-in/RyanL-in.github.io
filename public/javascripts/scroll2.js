$(window).scroll(function(){
    $(".buttons").css("opacity", 1 - $(window).scrollTop() / 800);
  });