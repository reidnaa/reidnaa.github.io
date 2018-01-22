$(function() {
    console.log( "it's go time" );

$('header').fadeIn(5000);
$('.contact').slideDown(5000);
  $('#who').on('click', function(){
    $('.summary').siblings().slideUp();
    $('.summary').slideToggle('slow').toggleClass('active');

  });

  // $('#blockblitz').on('click', function(){

  //   var url = "www.blockblitz.live";
  //   window.location(url);

  // });


  function newTab()
   {
     window.open('www.blockblitz.live', '_blank', 'toolbar=0,location=0,menubar=0');
   }

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