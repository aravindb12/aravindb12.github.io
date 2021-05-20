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

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  
  var date = new Date();
  document.querySelector("#date").innerText = ("0" + date.getDate()).slice(-2);
  document.querySelector("#month").innerText = monthNames[date.getMonth()];

  var mode = document.querySelector(".mode");
  mode.addEventListener("click", function () {
    var body = $("body");
    if(body.hasClass('light')){
      $("body").removeClass("light");
      mode.innerText = "Light";
    } else {
      $("body").addClass("light");
      mode.innerText = "Dark";
    }
  });
})();
