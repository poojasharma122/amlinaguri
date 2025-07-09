// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End

// Header Scroll JS Start
$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    header.toggleClass("fixed_header", $(window).scrollTop() > 0);
  });
});
// Header Scroll JS End

// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End

// Swiper JS Start
const { Autoplay, FreeMode } = Swiper;
Swiper.use([Autoplay, FreeMode]);

const swiper = new Swiper(".swiper-container", {
  loop: true,
  freeMode: true,
  speed: 3000,
  grabCursor: true,
  loopAdditionalSlides: 2,

  autoplay: {
    delay: 0, 
    disableOnInteraction: false,
    pauseOnMouseEnter: true, 
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    575: { slidesPerView: 3 },
    767: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
    1200: { slidesPerView: 6 },
    1400: { slidesPerView: 7 },
  },
});
// Swiper JS End



let form = document.querySelector(".form-wrapper");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); 
  });
}

// FAQ JS Start
let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
// FAQ JS End


