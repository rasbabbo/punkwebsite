$(document).ready(function() {
	$('.box').click(function() {
		$('.box').fadeOut('slow');
	});
	$('box').click(function() {
		$('.box').fadeIn('slow');
	});
});
// $(document).ready(function() {
// 	$('.box').slideDown('slow');
// });

$(document).ready(function() {
	$('.button').mouseenter(function() {
		$('.button').fadeTo('medium', 1);
	});
	$('.button').mouseleave(function() {
		$('.button').fadeTo('medium', 0.5);
	});
});
