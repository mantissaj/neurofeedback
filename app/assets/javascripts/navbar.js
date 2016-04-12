function setup_resize_listener() {
	$(window).on('resize', function() {
		if ($('nav#navipad ul').is(':visible')) {
			$('nav#navipad ul').hide();
		}
	});
}

$(document).ready(function() {
	$('#navicon').on('click', function() {
		if ($('nav#navipad ul').is(':visible')) {
			$('nav#navipad ul').hide();
		}
		else {
			$('nav#navipad ul').show();
		}
	});

	$('nav#navipad ul li').on('click', function() {
		$('nav#navipad ul').hide();
	});

	setup_resize_listener();
});