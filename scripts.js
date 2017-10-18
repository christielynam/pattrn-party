$('.tab').on('click', function() {
  $('.tab').removeClass('active');
  $('.content-container').removeClass('active-tab')
  $(this).addClass('active');
  $('.tab span').text('+');
  $(this).find('span').text('-');
  $(this).next().addClass('active-tab');
})
