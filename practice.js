$(window).on("load",function () {
  $('.loading').delay(1500).fadeOut(300);
});

jQuery(function($){
$('.mob_menu').click(function(){
$('.mob_menu').toggleClass('active');
});
});

$(function(){
$('.move').on('inview', function(event, isInView) {
 var section = jQuery(this);
 if (isInView) {
   setTimeout(function(){
     $(section).addClass('inview');
   },200);
 }
});
});