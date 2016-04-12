$(document).ready(function() {
	if ($('.alert').length) {
		if ($('.alert-notice').length) {
			$('.input input').val('');
			$('.input textarea').val('');
		}
		$('.alert').delay(2000).fadeOut(1000);
	}
});