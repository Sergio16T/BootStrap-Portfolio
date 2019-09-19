(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing. Edited timeout to take longer
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1750, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

//above code came with template -- below code I am adding 

let arrow = document.getElementById('arrow');
let aboutMeButton = document.querySelector('.btn');
let click =0; 

aboutMeButton.addEventListener("click", rotateCollapse);
aboutMeButton.addEventListener("mouseover", rotateArrow);
aboutMeButton.addEventListener("mouseout", resetArrow);
 

function rotateCollapse() {
  click += 1; 
  arrow.classList.add('btn-active');
  aboutMeButton.style.backgroundColor = '#325351'; 
  setTimeout(function(){
    arrow.classList.remove('btn-active');
    aboutMeButton.style.backgroundColor = '#64a19d'; 
    click = 0; 
  },1750); 
}  
function rotateArrow() {
  arrow.classList.add('btn-active');
  aboutMeButton.style.backgroundColor = '#325351'; 
}

function resetArrow(){
  if (click == 0) {
    arrow.classList.remove('btn-active');
    aboutMeButton.style.backgroundColor = '#64a19d'; 
  }
}
