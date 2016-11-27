

// $(function() {
// if ($( window ).width() >= 600) {

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0.05,}});

// build scenes
 var scene1 = new ScrollMagic.Scene({
   duration: '100%',
   triggerElement: "#sec1"})
      .setClassToggle("#menu1", "active") // add class toggle
      .addTo(controller);

  var scene1b = new ScrollMagic.Scene({
    triggerElement: "#photo1",
    duration: 350})
       .setPin('#sec1-text')
       .addTo(controller);

var scene2 = new ScrollMagic.Scene({
  triggerElement: "#sec2",
  offset: -100,
  duration: '80%',})
    .setClassToggle("#menu2", "active") // add class toggle
    .addTo(controller);
  var scene2b = new ScrollMagic.Scene({
    triggerElement: "#sec2",
    offset: -150,
    // duration: 200,
    })
     .setTween('#sec2-line', 0.5, {scale: 1.5})
     .addIndicators()
     .addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: "#sec3",
  duration: '200%'})
    .setClassToggle("#menu3", "active") // add class toggle
    .addTo(controller);
  var scene3b = new ScrollMagic.Scene({
    triggerElement: "#photo3",
    duration: 350})
       .setPin('#sec3-text')
       .addTo(controller);

var scene4 = new ScrollMagic.Scene({
  duration: '100%',
  triggerElement: "#sec4"})
    .setClassToggle("#menu4", "active") // add class toggle
    .addTo(controller);
  var scene4b = new ScrollMagic.Scene({
    triggerElement: "#photo4",
    duration: 350})
       .setPin('#sec4-text')
       .addTo(controller);

var scene5 = new ScrollMagic.Scene({
  duration: '200%',
  triggerElement: "#sec5"})
    .setClassToggle("#menu5", "active") // add class toggle
    .addTo(controller);
  var scene5b = new ScrollMagic.Scene({
    triggerElement: "#photo5",
    duration: 350})
       .setPin('#sec5-text')
       .addTo(controller);

var scene6 = new ScrollMagic.Scene({
  duration: '100%',
  triggerElement: "#sec6"})
    .setClassToggle("#menu6", "active") // add class toggle
    .addTo(controller);
  var scene6b = new ScrollMagic.Scene({
    triggerElement: "#photo6",
    duration: 350})
       .setPin('#sec6-text')
       .addTo(controller);

var scene7 = new ScrollMagic.Scene({
  duration: '100%',
  triggerElement: "#sec7"})
    .setClassToggle("#menu7", "active") // add class toggle
    .addTo(controller);

// )}
 // }
