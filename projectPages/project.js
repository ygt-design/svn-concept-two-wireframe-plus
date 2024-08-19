$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".menu").toggleClass("menu-active");

    // when menu-active is true than the hamburger menu will change to an X

    if ($(".menu").hasClass("menu-active")) {
      $(".hmb-first--line").css({
        mixBlendMode: "difference",
        transform: "rotate(45deg) translate(5px, 5px)",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });

      $(".hmb-second--line").css({
        transform: "rotate(-45deg)",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
        mixBlendMode: "difference",
      });
    } else {
      $(".hmb-first--line").css({
        transform: "rotate(0) translate(0, 0)",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
      });

      $(".hmb-second--line").css({
        transform: "rotate(0)",
        transition: `all 700ms cubic-bezier(0.075, 0.82, 0.165, 1)`,
        mixBlendMode: "difference",
      });
    }
  });

  $(".all-projects--project").each(function () {
    $(this).append(
      `<div class="all-projects--project--container"> 
                <div class="all-projects--project--image"> </div>
    
                <div class="all-projects--project--description">
                    <div class="all-projects--header-line"> </div>
                    <div class="all-projects--sub-header-line"> </div>
                    <div class="all-projects--sub-header-line"> </div>
                </div>
         
            </div>`
    );

    // change the background color of .one to red when scrolled 200

    $(window).scroll(function () {
      if ($(window).scrollTop() > 723) {
        $(".one").css("background-color", "#8c8c8c");
      } else {
        $(".one").css("background-color", "#D9D9D9");
      }

      if ($(window).scrollTop() > 1950) {
        $(".two").css("background-color", "#8c8c8c");
        $(".one").css("background-color", "#D9D9D9");
      } else {
        $(".two").css("background-color", "#D9D9D9");
      }

      if ($(window).scrollTop() > 2650) {
        $(".three").css("background-color", "#8c8c8c");
        $(".two").css("background-color", "#D9D9D9");
      } else {
        $(".three").css("background-color", "#D9D9D9");
      }

      if ($(window).scrollTop() > 4740) {
        $(".four").css("background-color", "#8c8c8c");
        $(".three").css("background-color", "#D9D9D9");
      } else {
        $(".four").css("background-color", "#D9D9D9");
      }

      if ($(window).scrollTop() > 7313) {
        $(".five").css("background-color", "#8c8c8c");
        $(".four").css("background-color", "#D9D9D9");
      } else {
        $(".five").css("background-color", "#D9D9D9");
      }

      if ($(window).scrollTop() > 8029) {
        $(".six").css("background-color", "#8c8c8c");
        $(".five").css("background-color", "#D9D9D9");
      } else {
        $(".six").css("background-color", "#D9D9D9");
      }

      if ($(window).scrollTop() > 9600) {
        $(".seven").css("background-color", "#8c8c8c");
        $(".six").css("background-color", "#D9D9D9");
      } else {
        $(".seven").css("background-color", "#D9D9D9");
      }
    });

    //console log scroll top
    $(window).scroll(function () {
      console.log($(window).scrollTop());
    });
  });
});
