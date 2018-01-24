// Scroll animation jQuery

$(document).ready(function(){
  $("a").click(function(e){
      e.preventDefault();
      var offset = $(this.hash).offset();
      if (!offset) {
      	return;
      }

      $("html,body").animate({
        scrollTop : offset.top         
      },2000);
  });
});

// Type animation

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    showCursor: false
});




