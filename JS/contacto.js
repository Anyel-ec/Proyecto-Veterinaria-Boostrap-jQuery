var elements = [
    "body", "a1", "a2", "a3","a4", "a5", "a6", "a7", "a8"
  ];
  
  var darkModeBtn = document.getElementById("dark-mode-btn");
  var icon = document.getElementById("icon");
  
  darkModeBtn.addEventListener("click", function() {
    elements.forEach(function(elementId) {
      var element = document.getElementById(elementId);
      element.classList.toggle("bg-dark");
      element.classList.toggle("text-light");
    });
  
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
  });