const menu = document.querySelector(".menu");
const btns = menu.querySelectorAll("button");
btns.forEach((b) => {
  b.addEventListener("click", (e) => {
    menu.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  });
});
