$(function(){
  theaMsForm($('.sign-in'));

  $('.show-popup').click(function () {
    $('.cs-popup').show();
    $('.cs-popup .close').click(function () {
      $('.cs-popup').hide();
    });
  });
});