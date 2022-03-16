//get Element
let uptoTop = document.querySelector(".uptoTop");

//show and hide element
window.onscroll = function () {
  console.log("scroll : " + this.scrollY);
  if (this.scrollY >= 500) {
    uptoTop.classList.add("show");
  } else {
    uptoTop.classList.remove("show");
  }
};

//Click element
uptoTop.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};
