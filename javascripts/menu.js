
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("mobile-bar");
    const menu = document.getElementById("mobile-menus");
    const cross = document.getElementById("cross");
  
    hamburgerIcon.addEventListener("click", function (e) {
      e.stopPropagation();
  
      hamburgerIcon.classList.toggle("active");
      menu.classList.toggle("show");
    });
    cross.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburgerIcon.classList.remove("active");
      menu.classList.remove("show");
    });
    
    document.body.addEventListener("click", function () {
      hamburgerIcon.classList.remove("active");
      menu.classList.remove("show");
    });
    menu.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });