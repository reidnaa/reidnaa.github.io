$(function() {
    console.log( "it's go time" );

$('header, nav').fadeIn(5000);
$('.contact').slideDown(5000);
  $('#who').on('click', function(){
    $('.summary').siblings().slideUp();
    $('.summary').slideToggle('slow').toggleClass('active');

  });


 $('#education').on('click', function(){
  $('.cleo-image').fadeOut('slow');
   $('.education').siblings().slideUp();
    $('.education').slideToggle('slow');

  });

  $('#experience').on('click', function(){
    $('.cleo-image').fadeOut('slow');
    $('.experience').siblings().slideUp();
    $('.experience').slideToggle('slow');

  });


  $('#skills').on('click', function(){
    $('.cleo-image').fadeOut('slow');
    $('.skills').siblings().slideUp();
    $('.skills').slideToggle('slow');

  });

  $('#volunteer').on('click', function(){
    $('.cleo-image').fadeOut('slow');
    $('.volunteer').siblings().slideUp();
    $('.volunteer').slideToggle('slow');

  });

  $('#projects').on('click', function(){
    $('.cleo-image').fadeOut('slow');
    $('.projects').siblings().slideUp();
    $('.projects').slideToggle('slow');

  });

  $('.cleo').on('click', function(){
    $('.cleo-image').fadeToggle('slow');
  });

  $('.cleo-image').on('click', function(){
    $('.cleo-image').fadeOut('slow');
  });

  $('#pdf').on('click', function(){
     window.open('Reid_Naaykens_resume.pdf', '_blank');
   });
});








