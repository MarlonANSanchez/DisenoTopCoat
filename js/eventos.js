$(document).ready(function()
{
  $('#slide').click(function() {
	if($("#casa").css("left") >= "20%"){
		$('#casa').animate({
		left: "-=33%",
		}, 500);
		
		$('#slide-menu').animate({
		width: "-=33%",
		}, 500);
	}
	
	else{
		$('#casa').animate({
		left: "+=33%",
		}, 500);
		
		$('#slide-menu').animate({
		width: "+=33%",
		}, 500);
	}
    
  });
 });     