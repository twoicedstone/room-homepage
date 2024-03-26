const closeIcon = document.getElementById("icon_cls");
const mobileNav = document.querySelector(".mobile_nav");
const mobileMenu = document.getElementById("mobile_menu");
const secondSection = document.querySelector(".second_section").innerHTML;
const thirdSection = document.querySelector(".third_section").innerHTML;
const firstSection = document.querySelector(".first_section").innerHTML;
const container = document.querySelector(".container");

mobileMenu.addEventListener("click", () => {
  mobileNav.style.display = "flex";
});

closeIcon.addEventListener("click", () => {
  mobileNav.style.display = "none";
});

// IMAGE / DIV CHANGE //
const change = [secondSection, thirdSection, firstSection];
let index = 0;
let travel;

const startTravel = () => {
  travel = setInterval(() => {
    ++index;

    // console.log(index);
    if (index < 0 || index === change.length) index = 0;
    container.innerHTML = change[index];
  }, 6000);
};

leftAngle = () => {
  if (index === 0) index = change.length;

  clearInterval(travel);
  container.innerHTML = change[--index];
  startTravel();
};

rightAngle = () => {
  if (index === change.length - 1) index = -1;

  clearInterval(travel);
  container.innerHTML = change[++index];
  startTravel();
};

startTravel();
