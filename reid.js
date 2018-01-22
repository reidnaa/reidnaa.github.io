$(function() {
    console.log( "it's go time" );

$('header, nav').fadeIn(5000);
$('.contact').slideDown(5000);
  $('#who').on('click', function(){
    $('.summary').siblings().slideUp();
    $('.summary').slideToggle('slow').toggleClass('active');

  });


 $('#education').on('click', function(){
   $('.education').siblings().slideUp();
    $('.education').slideToggle('slow');
  });

  $('#experience').on('click', function(){
    $('.experience').siblings().slideUp();
    $('.experience').slideToggle('slow');
  });


  $('#skills').on('click', function(){
    $('.skills').siblings().slideUp();
    $('.skills').slideToggle('slow');
  });

  $('#volunteer').on('click', function(){
    $('.volunteer').siblings().slideUp();
    $('.volunteer').slideToggle('slow');
  });
});