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
    $('.cleo-image').fadeOut('slow');
  });

  $('#experience').on('click', function(){
    $('.experience').siblings().slideUp();
    $('.experience').slideToggle('slow');
    $('.cleo-image').fadeOut('slow');
  });


  $('#skills').on('click', function(){
    $('.skills').siblings().slideUp();
    $('.skills').slideToggle('slow');
    $('.cleo-image').fadeOut('slow');
  });

  $('#volunteer').on('click', function(){
    $('.volunteer').siblings().slideUp();
    $('.volunteer').slideToggle('slow');
    $('.cleo-image').fadeOut('slow');
  });

  $('#projects').on('click', function(){
    $('.projects').siblings().slideUp();
    $('.projects').slideToggle('slow');
    $('.cleo-image').fadeOut('slow');
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








