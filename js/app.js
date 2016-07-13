$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1000px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '500px');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

$(document).keydown(function(x) {
	if (x.which == 88) {
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').show();
	}
})
	.keyup(function(x) {
		if (x.which == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	})
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 1;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
