/*$(document).ready(function(){
	$("#B1").hide();
	$("#B2").hide();
	$("#B3").hide();
	$("#B1").fadeIn(2000);
	$("#B2").fadeIn(3000);
	$("#B3").fadeIn(4000);

});

$(document).ready(function(){
	$("#b1").hide();
	$("#b2").hide();
	$("#b3").hide();
	$("#b1").fadeIn(2000);
	$("#b2").fadeIn(3000);
	$("#b3").fadeIn(4000);

});*/

/*$(document).ready(function(){
	$(window).scroll(function(){
		if($(document).scrollTop()  < 500 ) {
			$("#p1").slideUp(3000);
			$("#p2").slideUp(3000);
			$("#p3").slideUp(3000);
			$("#p4").slideUp(3000);
			$("#p5").slideUp(3000);
			$("#p6").slideUp(3000);
			$("#p7").slideUp(3000);
			$("#p8").slideUp(3000);
		}
		else{
			
			$("#p1").slideDown(3000);
			$("#p2").slideDown(3000);
			$("#p3").slideDown(3000);
			$("#p4").slideDown(3000);
			$("#p5").slideDown(3000);
			$("#p6").slideDown(3000);
			$("#p7").slideDown(3000);
			$("#p8").slideDown(3000);
		}
});
});*/
$(document).ready(function(){
$(window).on('scroll', function() {
    $('#topBox').css('opacity', function() {
        return 2 - ($(window).scrollTop() / $(this).outerHeight());
    });
});
});
