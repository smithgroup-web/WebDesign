$(document).ready(function () {
	
	$("#contacts-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$('.thank-popup').fadeIn();
			$(".html").addClass("lock");
		});
		return false;
	});
	$("#popup-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$('.js-overlay-campaign').fadeOut();
			$('.thank-popup').fadeIn();
			$(".html").addClass("lock");
		});
		return false;
	});

});