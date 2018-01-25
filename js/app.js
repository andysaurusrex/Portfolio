// Scroll animation jQuery

$(document).ready(function() {
  var scrollLink = '.scrolls';

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top()
    });
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




