$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  swipeToSlide: true,
  asNavFor: '.slider-for',
  slidesToScroll: 3,
  nextArrow: $('.slick-next'),
  prevArrow: $('.slick-prev'),
});

$('.slider-for').slick({
  infinite: true,
  swipeToSlide: true,
  slidesToShow: 1,
  asNavFor: '.slider',
  arrows: false
});

console.log('helllo');

/* make the button call the function */
let button = document.getElementById('theButton');
button.addEventListener('click', function() {
  steponup()
})

let button2 = document.getElementById('theButton2');
button2.addEventListener('click', function() {
  stepondown()
})

function stepondown() {
  let input = document.getElementById('number-counter');
  input.stepDown()
}
function steponup() {
  let input = document.getElementById('number-counter');
  input.stepUp()
}
