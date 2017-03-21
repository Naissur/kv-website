$(document).ready(function(){
	var $container = $('.person-container');

	$('.fetch').click(function(){
		var count = Number($('.input-count').val());
		var $loader = $('.loader', $container.parent());

		$loader.fadeIn(200);
		$container.slideDown(100);

		var params = {
			results: count
		};

		$.ajax({
			url: 'http://api.randomuser.me/',
			dataType: 'json',
			data: params,
			success: function(response){
				$container.empty();
				$loader.fadeOut(200);

				$.each(response.results, function(i, val){
					console.log(val.user.name.first+' '+val.user.name.last+' '+val.user.phone);

					var template = $('#person-template').html();
					var person = {
						avatarUrl: val.user.picture.medium,
						name: val.user.name.first+' '+val.user.name.last,
						phone: val.user.phone
					}

					var personHtml = Mustache.render(template, person);
					$container.append(personHtml);
				});
				$container.slideDown(300);
			}
		});
	});
});
