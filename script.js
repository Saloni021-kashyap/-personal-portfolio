// Navbar toggle
let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');
menu.onclick = () => nav.classList.toggle('active');

// Circular animation
const circles = document.querySelectorAll(".progress-circle");

circles.forEach(circle=>{
  const percent = circle.dataset.percent;
  let count = 0;
  const interval = setInterval(()=>{
    count++;
    circle.style.background =
      `conic-gradient(#00e5ff ${count*3.6}deg, #0a2436 0deg)`;
    if(count>=percent) clearInterval(interval);
  },15);
});

const hireBtn = document.getElementById("hireBtn");
const popup = document.getElementById("hirePopup");
const closeBtn = document.getElementById("closePopup");

hireBtn.onclick = () => popup.style.display = "flex";
closeBtn.onclick = () => popup.style.display = "none";

