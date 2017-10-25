$(window).on("scroll", function() {
    if($(window).scrollTop() > 700) {
        $("header").addClass("active");
        $(".logo").fadeIn();
    } else {
      $(".logo").fadeOut();
       $("header").removeClass("active");
    }
});
