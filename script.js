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


// //adds a scrolling feature
// function animate_string(id) {
//   var element = document.getElementById(id);
//   var textNode = element.childNodes[0];
//   var text = textNode.data;
  
//   setInterval(function() {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     textNode.data = text;
//   }, 100);
// }


// //beginning of a calc - be good to use a prototype or constructor to simplify
// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() 
// { 
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
// document.getElementById("result").innerHTML = num1 / num2;
// }







