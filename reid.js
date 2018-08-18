$(function() {
    console.log( "it's go time" );


var w = $(window).width();

  if( w > 800){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $(this).css('display','absolute');
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
}


///////////////


setTimeout(
  function()
  {
    $('.overlay').fadeOut(2000);
  }, 2000);


///////////////


///////////

$('.timeline-Widget').css('background-color','transparent');
setTimeout(
  function()
  {

$('header, nav').fadeIn(5000);
$('.contact').slideDown(5000);
$('.twitter').slideDown(5000);

}, 2000);



/*
setTimeout(
  function()
  {
    $('.special').fadeIn(9000);
    setTimeout(function(){
      $('.call').fadeIn('slow');
    },3000);
  }, 3000);
/////////////////*/


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

  var w = $(window).width();

  if( w < 600){// checks if it is mobile
     
    // this will look for an element that has the same 
    //data attribute value as the link you clicked on and scroll to it

      $(".nav-link").on('click', function() { 
         // $('div').find('.back').slideUp('slow');

        
         var data =  $(this).attr('data-relation');
         var connect = $('.back').val(data);
        let position = $(connect).offset().top; 
        connect.addClass('active');
        $("HTML, BODY").animate({ scrollTop: position }, 1000); });
  
    $('.border').append('<span class="back-to-menu">Back to menu</span>');

    $('.back-to-menu').on('click', function(){
      let position = $('body').offset().top; 
      $("HTML, BODY").animate({ scrollTop: position }, 500); 

      $(this).closest('.back').slideUp('slow').removeClass('active');

    });

  }


  if( w < 800){
    $('.back-to-menu').css('display', 'block');
    $('.contact').append('<span class="back-to-menu">Back to menu</span>');

    $('.back-to-menu').on('click', function(){
      let position = $('body').offset().top; 
      $("HTML, BODY").animate({ scrollTop: position }, 500); });

    $('nav ul').append('<li class="nav-link" id="contact" data-relation="contact" >contact</li>');
     
      $('#contact').on('click', function(){

        $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 2000);
      });


  }

  


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