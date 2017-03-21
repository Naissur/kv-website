$(document).ready(function(){
	var $container = $('.molecule_menu > .container');
	$container.slideUp(0);

	$('.atom_menu-head').click(function(){
		$('.molecule_menu > .container').slideUp(200);
		$('> .container', $(this).parent()).slideDown(200);
	});
});
$(document).ready(function(){
	$('.offers .atom_menu-item').mouseenter(function(){
		$('.molecule_single-offer').css('z-index', '0');
		$('.molecule_single-offer').css('opacity', '0');
		$('.molecule_single-offer[data-id=' + $(this).data('id') +']').css('z-index', '1');
		$('.molecule_single-offer[data-id=' + $(this).data('id') +']').css('opacity', '1');
	});
});
