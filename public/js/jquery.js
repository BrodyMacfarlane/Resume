$(document).ready(function(){
	$('.x').on('click', function(){
		$('.messed').css('display', 'none')
	})
	var timey;
	var timer = function(){
		timey = setTimeout(function(){
			$('.explain').removeClass('delay');
			timey = setTimeout(function(){
				$('.smallimg').css('height', '320px')
				timey = setTimeout(function(){
					$('.smallimg').css('height', '300px')
				}, 200)
			}, 200)
		}, 1000)
	}
	var stopTimey = function(){
		clearTimeout(timey);
		$('.explain').addClass('delay');
	}
	$('.project-container, .bitcurve-title').mouseenter(function(){
		$('.project-container').removeClass('blur')
		$('.bitcurve-title').addClass('bitcurve-title-moved')
		timer();
	})
	$('.project-container, .bitcurve-title').mouseleave(function(){
		$('.project-container').addClass('blur')
		$('.bitcurve-title').removeClass('bitcurve-title-moved')
		stopTimey();
		console.log('stopped timey');
	})
	
})