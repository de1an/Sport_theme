$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplaySpeed: 1000,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $('.sticky').addClass('stickyAdd');
    } else {
      $('.sticky').removeClass('stickyAdd');
    }
  });
    

//  $('.cena').mouseenter(function () {
//        $(this).css({
//            border: "0px solid #f85a16"
//        }).animate({
//            borderWidth: '5px',
//        }, 200);
//    }).mouseleave(function () {
//        $(this).animate({
//             borderWidth: '0px',
//        }, 500);
//    });
});

    function toggleDropdown() {
        let navbarToggle = document.getElementById('navbar-toggle');
        if(navbarToggle.className === 'topNav') {
            navbarToggle.className += ' responsive';
        } else {
            navbarToggle.className = 'topNav';
        }
    }
