$(function() {
    console.log( "it's go time" );


setTimeout(
  function()
  {
    $('.overlay').fadeOut(4000);
  }, 4000);




setTimeout(
  function()
  {

$('header, nav').fadeIn(5000);
$('.contact').slideDown(5000);
}, 4000);

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
   
   $('.education-content').siblings().slideUp();
    $('.education-content').slideToggle('slow');
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

  $('#projects').on('click', function(){
    
    $('.projects').siblings().slideUp();
    $('.projects').slideToggle('slow');

  });

  

  $('#pdf').on('click', function(){
     window.open('Reid_Naaykens_resume2018.pdf', '_blank');
   });
});