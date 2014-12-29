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

//making thumbnails expand and contract
$(document).ready(function() {
	$('.thumbnail').hover(function() {
		$(this).closest(".thumbnail").css("z-index", 1);
		$(this).animate({height: "400", width: "400"}, "fast");
	}, function() {
		$(this).closest(".thumbnail").css("z-index", 0);
		$(this).animate({height: "200", width: "200"}, "fast");
	});

});

$(document).ready(function() {
	$('input').focus(function() {
		$(this).css("outline-color", 'FF0000');
	});
});







