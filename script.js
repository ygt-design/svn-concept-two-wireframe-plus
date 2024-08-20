$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $(".intro-text span").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
    } else {
      $(".intro-text span").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
    }

    if ($(this).scrollTop() > 550) {
      $(".sticky--one span").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
      $(".sticky--one .project-title").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
    } else {
      $(".sticky--one span").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
      $(".sticky--one .project-title").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
    }

    if ($(this).scrollTop() > 1030) {
      $(".sticky--two span").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
      $(".sticky--two .project-title").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
    } else {
      $(".sticky--two span").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
      $(".sticky--two .project-title").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
    }

    if ($(this).scrollTop() > 1630) {
      $(".sticky--three span").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
      $(".sticky--three .project-title").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
    } else {
      $(".sticky--three span").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
      $(".sticky--three .project-title").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
    }

    if ($(this).scrollTop() > 2130) {
      $(".sticky--four span").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
      $(".sticky--four .project-title").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
    } else {
      $(".sticky--four span").css({
        opacity: "1",
        transition: "opacity 200ms cubic",
      });
      $(".sticky--four .project-title").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
    }

    if ($(this).scrollTop() > 2600) {
      $(".sticky--five span").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
      $(".sticky--five .project-title").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
    } else {
      $(".sticky--five span").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
      $(".sticky--five .project-title").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
    }

    if ($(this).scrollTop() > 2700) {
      $(".sticky--six span").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
      $(".sticky--six .project-title").css({
        opacity: "0",
        transition: "opacity 200ms",
      });
    } else {
      $(".sticky--six span").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
      $(".sticky--six .project-title").css({
        opacity: "1",
        transition: "opacity 200ms",
      });
    }
  });

  //console.log scroll from top
  $(window).scroll(function () {
    console.log($(this).scrollTop());
  });

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
});
