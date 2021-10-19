$(window).on("load", function(){
	$(".loader .inner").fadeOut(500, function(){
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});
});

$(document).ready(function(){

	$(".slideBox").slide({
		titCell:".numberTag li",
		mainCell:".slideImages ul",
		effect:"fold",
		autoPlay:true
	});

	// active fancybox
	// ps: fancybox and isotope need purchase if project go commercial
	$("[data-fancybox]").fancybox();

	$("#filters a").click(function(){
		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");
		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});

	// $("#navigation navbar-brand").click(function(e){
	// 	e.preventDefault();
	// 	var targetElement = $(this).attr("href");
	// 	var targetPosition = $(targetElement).offset().top;
	// 	$("html, body").animate({scrollTop: targetPosition - 68}, "slow");
	// });

	const nav = $("#navigation");
	const navTop =  nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation(){
		var body = $("body");
		if ($(window).scrollTop() >= navTop){
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else{
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	};
});