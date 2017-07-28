(function aniaw() {
	$('#label-0').addClass('label-0');
	var len = $('.label-other > img').length;

	function ani(i) {
		var j = i == (len - 1) ? 0 : (i + 1);
		var label_1 = $('#label-' + i);
		var label_2 = $('#label-' + j);
		var label_active_1 = $('.label-active-' + i);
		var label_active_2 = $('.label-active-' + j);
		var label_center = $('.label-center');
		label_1[0].addEventListener("webkitAnimationEnd", function () {
			label_center.removeClass('opacity1').addClass('opacity2');
			label_active_1.addClass('label-active-anima');
		}, false);
		label_active_1[0].addEventListener("webkitAnimationEnd", function () {
			label_1.removeClass('label-' + i);
			label_center.removeClass('opacity2').addClass('opacity1');
			label_2.addClass('label-' + j);
			label_active_1.removeClass('label-active-anima');
		}, false);
	}
	for (var i = 0; i < len; i++) {
		ani(i)
	}
})()
