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

$(document).ready(function() {
    
  // INITIATE THE FOOTER
siteFooter();
  // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
  $(window).resize(function() {
      siteFooter();
  });
  
  function siteFooter() {
      var siteContent = $('#site-content');
      var siteContentHeight = siteContent.height();
      var siteContentWidth = siteContent.width();

      var siteFooter = $('#site-footer');
      var siteFooterHeight = siteFooter.height();
      var siteFooterWidth = siteFooter.width();

      console.log('Content Height = ' + siteContentHeight + 'px');
      console.log('Content Width = ' + siteContentWidth + 'px');
      console.log('Footer Height = ' + siteFooterHeight + 'px');
      console.log('Footer Width = ' + siteFooterWidth + 'px');

      siteContent.css({
          "margin-bottom" : siteFooterHeight + 50
      });
  };
});