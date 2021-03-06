


if ($( window ).width() >= 1000) {
  $(function() {
    controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0.05,}});
    enabled = controller.enabled();
    controller.enabled(true)
    controller.update(true)

    // build scenes
     var scene1 = new ScrollMagic.Scene({
       duration: '100%',
       triggerElement: "#GeorgiaMills"})
          .setClassToggle("#menu1", "active")
          // .addIndicators()
          .addTo(controller);

      var scene1b = new ScrollMagic.Scene({
        triggerElement: "#photo1",
        duration: 300})
           .setPin('#sec1-text')
           //.addIndicators()
           .addTo(controller);


    var scene2 = new ScrollMagic.Scene({
      triggerElement: "#Skills",
      offset: -100,
      duration: '80%',})
        .setClassToggle("#menu2", "active")
        // .addIndicators()
        .addTo(controller);

      var scene2b = new ScrollMagic.Scene({
        triggerElement: "#Skills",
        offset: -150,
        // duration: 200,
        })
         .setTween('#sec2-line', 0.5, {scale: 1.5})
         .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
      triggerElement: "#sec3",
      duration: '100%',
      offset: -100 })
        .setClassToggle("#menu3", "active")
        // .addIndicators()
        .addTo(controller);

      var scene3b = new ScrollMagic.Scene({
        triggerElement: "#photo3",
        duration: 175})
           .setPin('#sec3-text')
          //  .addIndicators()
           .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
      duration: '100%',
      triggerElement: "#sec4",
      offset: -100 })
        .setClassToggle("#menu4", "active")
        // .addIndicators()
        .addTo(controller);

      var scene4b = new ScrollMagic.Scene({
        triggerElement: "#photo4",
        duration: 240})
           .setPin('#sec4-text')
          //  .addIndicators()
           .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
      duration: '100%',
      triggerElement: "#sec5",
       offset: -100 })
        .setClassToggle("#menu5", "active")
        // .addIndicators()
        .addTo(controller);

      var scene5b = new ScrollMagic.Scene({
        triggerElement: "#photo5",
        duration: 230})
           .setPin('#sec5-text')
          //  .addIndicators()
           .addTo(controller);

    var scene6 = new ScrollMagic.Scene({
      duration: '100%',
      triggerElement: "#sec6",
      offset: -100 })
        .setClassToggle("#menu6", "active")
        // .addIndicators()
        .addTo(controller);

      var scene6b = new ScrollMagic.Scene({
        triggerElement: "#photo6",
        duration: 200})
           .setPin('#sec6-text')
          //  .addIndicators()
           .addTo(controller);

    var scene7 = new ScrollMagic.Scene({
      duration: '100%',
      triggerElement: "#Contact",
      offset: -100 })
        .setClassToggle("#menu7", "active")
        // .addIndicators()
        .addTo(controller);
  }
 )}

 $(window).on("resize", function(e) {
  if ($(window).width() < 1000 && controller.enabled()) {
    controller.enabled(false);
    location.reload();
  } else if (controller.enabled(false)) {
    controller.enabled(true);
    location.reload();
  }
  controller.update(true);
});
