(function () {
  var scrollContainer = document.querySelector(".scroll-container");
  var browserUiBarsH;
  function getActualHeight() {
    const rootElement = document.querySelector(".scroll-container");
    const viewPortH = rootElement.getBoundingClientRect().height;
    const windowH = window.innerHeight;
    return (browserUiBarsH = viewPortH - windowH);
  }

  window.addEventListener(
    "wheel",
    function (event) {
      if (event.wheelDeltaY) {
        if (Math.abs(event.wheelDeltaY) > 120) {
          event.preventDefault();
          currentScrollPos = $(".scroll-container").scrollTop();
          if (event.deltaY > 0) {
            $(".scroll-container").scrollTop(
              currentScrollPos + $(window).height() - getActualHeight()
            );
          } else {
            $(".scroll-container").scrollTop(
              currentScrollPos - $(window).height() - getActualHeight()
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

  $("#intro").addClass("can-slide");
  scrollContainer.style.height = `calc(100vh - ${getActualHeight()}px)`;
})();
