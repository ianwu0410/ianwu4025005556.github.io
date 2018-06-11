//$(document).ready(function (){
//	$('.header').each(function(){
//		var $window=$(window),
//			$header=$(this),
//			$headerclone=$header.contents().clone(),
//			$headerClonecontainer=$('<div class="header-clone"><div>'),
//			threshold=$header.outerHeight();
//
//		$headerClonecontainer.append($headerclone);
//		$headerClonecontainer.appendTo('body');
//
//
//		$window.on('scroll',$.throttle(1000 / 15, function(){
//			if($window.scrollTop > threshold){
//				$headerClonecontainer.addClass('visible');
//			}else{
//				$headerClonecontainer.removeClass('visible');		
//			}
//		}));
//		$window.trigger('scroll');
//	});
//});
$(document).ready(function(){
	$(window).on("scroll",function(){
		var scrollDistence=$(window).scrollTop();
		var $header= $(".js-header");
	if(scrollDistence > 80){
		$header.addClass("header--colored");
	}else{
		$header.removeClass("header--colored");
		}
	});
})