$(window).on('load', function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 600) {
          $("header").addClass("active");
          $("nav.desktop .logo").fadeIn();
      } else {
        $("nav.desktop .logo").fadeOut();
         $("header").removeClass("active");
      }
  });

  $('.hamburger-menu').on('click', function(e){
    e.preventDefault();
    $('nav.mobile ul').slideToggle(200);
  })
});
