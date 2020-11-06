function botaoDoMenu() {
    var ulDoMenu = document.getElementById("meusLinks");
    if (ulDoMenu.style.display === "flex") {
      ulDoMenu.style.display = "none";
    } else {
      ulDoMenu.style.display = "flex";
    }
  }
