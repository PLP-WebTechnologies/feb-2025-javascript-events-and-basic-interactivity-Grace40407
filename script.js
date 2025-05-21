// Event Handling
document.getElementById("magicBtn").addEventListener("click", () => {
  alert("You clicked the magic button!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "coral";
});
document.getElementById("hoverBox").addEventListener("mouseout", () => {
  document.getElementById("hoverBox").style.backgroundColor = "lightblue";
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log("Key pressed:", e.key);
});

let pressTimer;
const secretBtn = document.getElementById("secretBtn");

secretBtn.addEventListener("dblclick", () => alert("Double click activated!"));
secretBtn.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => alert("Long press triggered!"), 1000);
});
secretBtn.addEventListener("mouseup", () => clearTimeout(pressTimer));

// Interactive Elements
document.getElementById("colorChanger").addEventListener("click", () => {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
document.getElementById("nextBtn").addEventListener("click", () => {
  slides[currentSlide].classList.remove("show");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("show");
});

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(content => content.classList.add("hidden"));
    document.getElementById(tab.dataset.target).classList.remove("hidden");
  });
});

// Form Validation
document.getElementById("password").addEventListener("input", () => {
  const pass = document.getElementById("password").value;
  const hint = document.getElementById("passwordHint");
  if (pass.length < 8) {
    hint.textContent = "Password must be at least 8 characters";
  } else {
    hint.textContent = "";
  }
});

document.getElementById("myForm").addEventListener("submit", (e) => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;

  if (!name || !email || pass.length < 8) {
    alert("Please fill all fields correctly.");
    e.preventDefault();
  }
});
