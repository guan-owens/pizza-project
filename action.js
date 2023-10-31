function openTab(tabName) {
  var i;
  var tableContent = document.getElementsByClassName("nav-page");

  for (i = 0; i < tableContent.length; i++) {
    tableContent[i].style.display = "none";
  }

  document.getElementsById(tabeName).style.display = "flex";
}
