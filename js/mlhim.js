!function ($) {
  $(function(){
    $('#myCarousel').carousel()
    local_navigation = $('#page-content-nav')
    if(local_navigation[0]){
      $('#page-content h3').each(function(el){
	var el = $(this)
	nav_item = '<li><a href="#' 
	+ el.attr('id') 
	+ '">'
	+el.text()
	+'</a></li>'
	local_navigation.append(nav_item)
      })
    }
  })
}(window.jQuery)
