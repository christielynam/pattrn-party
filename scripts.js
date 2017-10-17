const showActiveTab = () => {
  $('#tab-one').hasClass('active') ?
  $('#tab-one-content').addClass('active-tab') :
  $('#tab-one-content').removeClass('active-tab');

  $('#tab-two').hasClass('active') ?
  $('#tab-two-content').addClass('active-tab') :
  $('#tab-two-content').removeClass('active-tab');

  $('#tab-three').hasClass('active') ?
  $('#tab-three-content').addClass('active-tab') :
  $('#tab-three-content').removeClass('active-tab');

  $('#tab-four').hasClass('active') ?
  $('#tab-four-content').addClass('active-tab') :
  $('#tab-four-content').removeClass('active-tab');
}


$('.tab').on('click', function() {
  $('.tab').removeClass('active');
  $(this).addClass('active');
  $('.tab span').text('+');
  $(this).find('span').text('-');
  showActiveTab();
})
