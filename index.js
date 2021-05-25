(function () {
   $("#intro").addClass("can-slide");

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

  var contact = document.querySelector("#click-contact");
  contact.addEventListener("click", function(){
    window.scrollTo(0,document.body.scrollHeight);
  })

  var mode = document.querySelector(".mode");
  mode.addEventListener("click", function () {
    var body = $("body");
    if (body.hasClass("dark")) {
      $("body").removeClass("dark");
      mode.innerText = "Dark";
    } else {
      $("body").addClass("dark");
      mode.innerText = "Light";
    }
  });

})();
