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

// Slick Slider JS Start
$('.home_featured_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  arrow: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        centerPadding: '0',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerPadding: '0',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {

        centerPadding: '0',
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 575,
      settings: {
        dots:false,
        slidesToShow: 1,
      }
    }
  ]
});
// Slick Slider JS End

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

let form = document.querySelector(".form-wrapper");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); 
  });
}

// Read More JS Start
$('.subpage-readmore-btn').click(function (e) {
  e.preventDefault();
  const $button = $(this);
  const $content = $button.closest('.destination-card-text').find('.destination-para');

  $content.stop(true, true).slideToggle(500, function () {
      const isVisible = $content.is(':visible');

      $button.html(isVisible
          ? 'Read Less <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>' // UP arrow
          : 'Read More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>' // DOWN arrow
      );
  });
});
// Read More JS end