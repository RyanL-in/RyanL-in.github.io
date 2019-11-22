$(window).scroll(function(){
    $("#flash").css("opacity", 1 - $(window).scrollTop() / 250);
  });