$(document).ready(function() {
	$('#navicon').on('click', function() {
		if ($('nav ul').is(':visible')) {
			$('nav ul').removeClass('mobile');
			// $('nav ul').hide();
		}
		else {
			$('nav ul').addClass('mobile');
			$('nav ul').show();
		}
	});

	$('nav ul li').on('click', function() {
		$('nav ul.mobile').hide();
	});
});
