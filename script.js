$('.myMenu ul li').hover(function(){
	$(this).children('ul').stop(true, false, true).fadeToggle(400);
});