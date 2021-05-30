document.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.getElementById("land");
  function getActualHeight() {
    const viewPortH = rootElement.getBoundingClientRect().height;
    const windowH = window.innerHeight;
    return Math.abs(viewPortH - windowH);
  }
  rootElement.style.height = `calc(100vh - ${getActualHeight()}px)`;

  document.querySelectorAll("[data-toggle-sidebar]").forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      const sidebarID = toggle.dataset.toggleSidebar;
      const sidebarElement = sidebarID
        ? document.getElementById(sidebarID)
        : undefined;
      if (sidebarElement) {
        let sidebarState = sidebarElement.getAttribute("aria-hidden");
        sidebarElement.setAttribute("aria-hidden", sidebarState ? false : true);
        sidebarElement.style.height = `calc(100vh - ${getActualHeight()}px)`;
        document.querySelector("body").classList.add("side-active");
      }
    });
  });

  document.querySelectorAll(".sidebar__close").forEach((close) => {
    close.addEventListener("click", (e) => {
      e.currentTarget.parentElement.setAttribute("aria-hidden", true);
      document.querySelector("body").classList.remove("side-active");
    });
  });

  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });
  const projectScroller = document.querySelector(".project-scroller");

  document
    .querySelector(".scroll-btn__next")
    .addEventListener("click", scrollToNextPage);
  document
    .querySelector(".scroll-btn__prev")
    .addEventListener("click", scrollToPrevPage);

  var project_item_size;

  function scrollToNextPage() {
    project_item_size =
      projectScroller.querySelector(".projects__item").clientWidth;
    projectScroller.scrollBy({
      top: 0,
      left: project_item_size,
      behavior: "smooth",
    });
  }

  function scrollToPrevPage() {
    project_item_size =
      projectScroller.querySelector(".projects__item").clientWidth;
    projectScroller.scrollBy({
      top: 0,
      left: -project_item_size,
      behavior: "smooth",
    });
  }
  const divs = rootElement.children;
  var counter = 0;
  const interval = window.setInterval(function () {
    if (divs[counter - 1]) {
      divs[counter - 1].classList.remove("show");
    }

    divs[counter].classList.add("show");
    counter += 1;

    if (counter === divs.length - 1) {
      window.clearInterval(interval);
    }
  }, 2000);
});
