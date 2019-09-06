$(function() {
  var $nav = $('body > nav')
  var $links = $nav.find('li a')

  $links.click(function(e){
    $links.filter('a').removeClass('active')
    $(this).addClass('active')
  })
})
