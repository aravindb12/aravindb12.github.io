(function () {
  const rootElement = document.querySelector(".scroll-container");
  const viewPortH = rootElement.getBoundingClientRect().height;
  const windowH = window.innerHeight;
  const browserUiBarsH = viewPortH - windowH;
  rootElement.style.height = `calc(100vh - ${browserUiBarsH}px)`;
  var scrollContainer = document.getElementsByClassName("scroll-container")[0];
  window.addEventListener(
    "wheel",
    function (event) {
      if (event.wheelDeltaY) {
        if (Math.abs(event.wheelDeltaY) > 120) {
          event.preventDefault();
          currentScrollPos = $(".scroll-container").scrollTop();
          const rootElement = document.querySelector(".scroll-container");
          const viewPortH = rootElement.getBoundingClientRect().height;
          const windowH = window.innerHeight;
          const browserUiBarsH = viewPortH - windowH;
          if (event.deltaY > 0) {
            $(".scroll-container").scrollTop(
              currentScrollPos + $(window).height()-browserUiBarsH
            );
          } else {
            $(".scroll-container").scrollTop(
              currentScrollPos - $(window).height()-browserUiBarsH
            );
          }
          event.stopPropagation();
        }
      }
    },
    { passive: false }
  );

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
