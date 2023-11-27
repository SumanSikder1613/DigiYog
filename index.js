//NavBar
$(document).ready(function(){
$(".sub-btn").click(function(){
$(this).next(".sub-menu").slideToggle();
});

$(".more-btn").click(function(){
$(this).next(".more-menu").slideToggle();
    });
            
 });

 var menu= document.querySelector(".menu");
 var menuBtn= document.querySelector(".menu-btn");
 var closeBtn= document.querySelector(".close-btn");

menuBtn.addEventListener("click", ()=>{
menu.classList.add("active");
});

closeBtn.addEventListener("click", ()=>{
 menu.classList.remove("active");
 });

 //DropDown

 function show(anything){
 document.querySelector('.textbox').value= anything;
   }
          
   let dropdown = document.querySelector('.dropdown');
   dropdown.onclick= function(){
   dropdown.classList.toggle('active');
          }

  document.getElementById("pictures").onclick = function () {
  location.href = "product.html";
          }

// hero

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let counter = 0;

function updateSlide() {
    const size = slides[0].clientWidth;
    slider.style.transform = `translateX(${-size * counter}px)`;
}

function slideNext() {
    if (counter >= slides.length - 1) {
        counter = 0; // Reset to the first slide
    } else {
        counter++;
    }
    updateSlide();
}

function slidePrev() {
    if (counter <= 0) {
        counter = slides.length - 1; // Go to the last slide
    } else {
        counter--;
    }
    updateSlide();
}

// Automatic slide change every 3 seconds
setInterval(slideNext, 5000);


