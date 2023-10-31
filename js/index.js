function openItem(evt, tabName) {
  // Declare all variables
  let i, tabcontent, navlink;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="navlink" and remove the class "active"
  navlink = document.getElementsByClassName("navlink");
  for (i = 0; i < navlink.length; i++) {
    navlink[i].className = navlink[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}
