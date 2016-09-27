$(document).ready(function(){

// scroll

$('.main-navigation-list-item a').click(function(event) {
event.preventDefault();
var href=$(this).attr('href');
var target=$(href);
var top=target.offset().top;
$('html,body').animate({
scrollTop: top
}, 1200);
});


// carousel


  $(".slider").owlCarousel({
  	items : 4,
  	navigation: true,
  	navigationText: ["",""],
  	pagination: false,
  	itemsDesktopSmall : [1024,3],
  	itemsMobile : [320,1],
  	 autoPlay : true,
    stopOnHover : true,
      responsive:{
        320:{
            items:1,
            nav:true
        },
        750:{
            items:3,
            nav:false,
            loop:true,
            dots: true,
            dotsEach: true
        },
        970:{
            items:4,
            nav:true,
            loop:true,
            margin: 12,
        },
        1200:{
            items:4,
            nav:true,
            loop:false
        }
    }
  });
// flipper

$("#card").flip({
  axis: 'y',
  trigger: 'click'
});
$("#card2").flip({
  axis: 'y',
  trigger: 'click'
});
$("#card3").flip({
  axis: 'y',
  trigger: 'click'
});
$("#card4").flip({
  axis: 'y',
  trigger: 'click'
});

});