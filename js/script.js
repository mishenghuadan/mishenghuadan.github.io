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

	// activing superslides for top image to slide
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	// creating the typed effect of the words
	var options = {
		strings: ['坚定不移的探索游戏成为真正第九艺术的道路', 
				  '将游戏的乐趣和艺术文化的传播深耕下去，探索一条未来可行的游戏艺术之旅'],
  		typeSpeed: 90,
  		loop: true,
  		startDelay: 1000,
  		showCursor: false,
  		fadeOut: true
	};

	var typed = new Typed('.typed', options);

	// activing owl carousel for scrolling left or right of skill section
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
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