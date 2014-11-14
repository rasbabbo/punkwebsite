$(document).ready(function() {
	$('.box').fadeOut(1000);
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
