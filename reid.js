$(function() {
    console.log( "it's go time" );




$('header, nav').fadeIn(5000);
$('.contact').slideDown(5000);


setTimeout(
  function()
  {
    $('.special').fadeIn(9000);
    setTimeout(function(){
      $('.call').fadeIn('slow');
    },5000);
  }, 5000);



 $('.corner').on('click', function(){
 window.open('https://reidnaa.github.io/drums/','_blank');
 });

// change creepy text on hover
  $('.corner').on('mouseover', function(){
    $('.call').fadeOut('slow').css('display', 'none');
    $('.question').fadeIn('slow');
  });


// change back creepy text
  $('.corner').on('mouseout', function(){
      $('.question').fadeOut('slow').css('display', 'none');
      setTimeout(function(){
        $('.call').fadeIn('slow');
      }, 5000);
   });



  $('#who').on('click', function(){
    $('.summary').siblings().slideUp();
    $('.summary').slideToggle('slow');
  });

 $('#education').on('click', function(){
  $('.cleo-image').fadeOut('slow');
   $('.education-content').siblings().slideUp();
    $('.education-content').slideToggle('slow');
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
     window.open('Reid_Naaykens_resume2018.pdf', '_blank');
   });
});








