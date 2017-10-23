$(window).on("scroll", function() {
    if($(window).scrollTop() > 600) {
        $("header").addClass("active");
        $(".logo").fadeIn();
    } else {
      $(".logo").fadeOut();
       $("header").removeClass("active");
    }
});
