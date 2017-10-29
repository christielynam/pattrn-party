$('.tab').on('click', function() {
  $('.tab').removeClass('active');
  $('.content-container').removeClass('active-tab')
  $(this).addClass('active');
  $('.tab span').text('+');
  $(this).find('span').text('-');
  $(this).next().addClass('active-tab');
})

$('.menu-btn').on('click', function() {
  $('.nav-links-search').toggleClass('drop-down');
  $('nav').toggleClass('move-btn');
})
