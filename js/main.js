window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-path]");
  const tabsItem = document.querySelectorAll(".how__item");
  const burger = document.querySelector(".burger");
  const menuClose = document.querySelector(".burger__menu");
  const menu = document.querySelector(".header__nav-mobile");

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  tabs.forEach(tab => tab.addEventListener('click', e => {
    const target = e.target;
    const path = target.dataset.path;

    tabs.forEach(tab => tab.classList.remove("card-work__nav-item--activ"));
    target.classList.add("card-work__nav-item--activ");

    tabsItem.forEach(el => el.classList.remove("how__item--visible"));
    document.querySelector(`[data-target=${path}]`).classList.add("how__item--visible");
  }));

  $(".faq__accordion").accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
    icons: false,
  });

  burger.addEventListener("click", e => {
    e.preventDefault();

    e.currentTarget.classList.add("burger--hidden");
    menu.classList.add("header__nav-mobile--visible");
  });

  menuClose.addEventListener("click", () => {
    burger.classList.remove("burger--hidden");
    menu.classList.remove("header__nav-mobile--visible");
    menu.classList.add("header__nav-mobile--hidden");
  });
})

