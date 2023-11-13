$(document).ready(function(){
  $('.header .container').slick({
    speed: 300,
    slidesToShow: 4,
    prevArrow: '<img src="assets/images/prev.svg" alt="prev" />',
    nextArrow: '<img src="assets/images/next.svg" alt="prev" />',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});