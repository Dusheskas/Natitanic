
// Slider
$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      items: 1,
      center: true,
      loop: true
   });
});

const owl = $('.owl-carousel');

$('.slider__btn-next').click(function () {
   owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.slider__btn-prev').click(function () {
   // With optional speed parameter
   // Parameters has to be in square bracket '[]'
   owl.trigger('prev.owl.carousel', [300]);
});


// Modal Window 
const modalOpen = document.getElementById("modalOpen");
const modalContainer = document.getElementById("modalContainer");
const modalClose = document.getElementById("modalClose");

modalOpen.addEventListener('click', () => {
   modalContainer.classList.add('show');
});

modalClose.addEventListener('click', () => {
   modalContainer.classList.remove('show');
});


// Scroll
$('a.scrollToBlock').on('click', function (event) {
   var $anchor = $(this);
   $('html, body')
      .stop()
      .animate({
         scrollTop: $($anchor.attr('href')).offset().top - 20
      },
         {
            duration: 1200,
            specialEasing: {
               width: 'linear',
               height: 'easeInOutCubic',
            },
         }
      );
   event.preventDefault();
});


// On scroll animation
let animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;


         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         } else {
            animItem.classList.remove('active');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
   }
   setTimeout(() => {
      animOnScroll();
   }, 200);
}