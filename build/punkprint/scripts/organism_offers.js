$(document).ready(function(){
	$('.offers .atom_menu-item').mouseenter(function(){
		$('.molecule_single-offer').css('z-index', '0');
		$('.molecule_single-offer').css('opacity', '0');
		$('.molecule_single-offer[data-id=' + $(this).data('id') +']').css('z-index', '1');
		$('.molecule_single-offer[data-id=' + $(this).data('id') +']').css('opacity', '1');
	});
});
