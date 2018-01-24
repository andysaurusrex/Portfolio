// Scroll animation jQuery

$(document).ready(function() {
  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(event) {
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    },700)
  });

})

// Type animation

  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    showCursor: false
});




