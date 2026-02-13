
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


function toggleFAQ(element) {

  const item = element.parentElement;

  // close all
  document.querySelectorAll(".faq-item").forEach(faq => {
    if (faq !== item) {
      faq.classList.remove("active");
      faq.querySelector(".faq-icon").textContent = "+";
    }
  });

  // toggle current
  item.classList.toggle("active");

  const icon = item.querySelector(".faq-icon");
  icon.textContent = item.classList.contains("active") ? "−" : "+";
}
