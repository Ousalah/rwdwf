/* Global $ */
$(function () {
	'use strict';
	$('.info-list li').on('click', function () {
		$(this).addClass('selected').siblings('li').removeClass('selected');

		var selectedTab = $(".info-list li").index($(this));
		$(".info-content div:eq(" + selectedTab + ")").fadeIn()
			.siblings('.info-content div').hide();
	});
});