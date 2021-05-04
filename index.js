(function () {
  let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
   var scrollContainer = document.getElementsByClassName("scroll-container")[0];
//   window.addEventListener(
//     "wheel",
//     function (event) {
//       if (event.wheelDeltaY) {
//         if (Math.abs(event.wheelDeltaY) > 120) {
//           event.preventDefault();
//           currentScrollPos = $(".scroll-container").scrollTop();
//           if (event.deltaY > 0) {
//             $(".scroll-container").scrollTop(
//               currentScrollPos + $(window).height()
//             );
//           } else {
//             $(".scroll-container").scrollTop(
//               currentScrollPos - $(window).height()
//             );
//           }
//           event.stopPropagation();
//         }
//       }
//     },
//     { passive: false }
//   );

  scrollContainer.addEventListener("scroll", function () {
    $("section").each(function () {
      var sectionPos = $(this).offset().top;
      var sectionHeight = $(this).height();
      var topOfWindow = $(window).scrollTop();

      if (
        sectionPos < topOfWindow + sectionHeight &&
        sectionPos + sectionHeight > topOfWindow
      ) {
        $(this).addClass("can-slide");
      } else {
        $(this).removeClass("can-slide");
      }
    });
  });

  animateDiv();

  function animateDiv() {

    $(".floating-shapes").each(function () {
      var newq = makeNewPosition();
      $(this).animate({ top: newq[0], left: newq[1] }, 5000, function () {
        animateDiv();
      });
    });
  }

  function makeNewPosition() {
    var h = $(window).height() - 20;
    var w = $(window).width() - 20;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];
  }
  $("#intro").addClass("can-slide");
})();
