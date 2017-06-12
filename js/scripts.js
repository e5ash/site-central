$('#content .slider').slick({
	prevArrow: '<button type="button" class="box slick-arrow slick-prev"><i class="icon icon-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="box slick-arrow slick-next"><i class="icon icon-arrow-right"></i></button>'
});

$('#dinamic .slider').slick({
	slidesToShow: 6,
	prevArrow: '<button type="button" class="box slick-arrow slick-prev"><i class="icon icon-arrow-left"></i></button>',
	nextArrow: '<button type="button" class="box slick-arrow slick-next"><i class="icon icon-arrow-right"></i></button>'
});

$('#offer .caret, #news .caret, #news .title p').click(function() {
	var myParent = $(this).parents('.item'),
		content = myParent.find('.content');

	myParent.toggleClass('open');
	content.slideToggle(300);
});


$('footer .docs .header a').click(function(e) {
	e.preventDefault();
	var parent = $(this).parents('.docs');
	parent.toggleClass('open');
});

$('footer .docs .btn-close').click(function() {
	var parent = $(this).parents('.docs');
	parent.removeClass('open');
});


$('form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    // popupForm.css('display','none');
	    // popupMessage.css('display','block');
	});
	return false;
});


$('input.tel').mask("+7 (999) 999-99-99");