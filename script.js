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

$(document).ready(function() {
	$('#button').click(function() {
		var toAdd = $('input[name = checkListItem]').val();
		$('.list').append('<div class="item">' + toAdd + '</div>');	
	});
	$(document).on('click', '.item', function() {
		$(this).remove();
	});
});
