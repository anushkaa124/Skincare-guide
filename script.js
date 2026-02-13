
function showRoutine(type, btn) {
  // hide all routines
  document.querySelectorAll(".routine-content").forEach(section => {
    section.classList.remove("active");
  });

  // show selected
  document.getElementById(type).classList.add("active");

  // tab active state
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  btn.classList.add("active");
}

