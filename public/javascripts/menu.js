$('#menu-btn').click(function(){
	$('.main-menu').css('visibility','visible');
	$('.main-menu').css('transform','translateY(0%)');
	
});

$('.close-btn').click(function(){
	$('.main-menu').css('visibility','hidden');
	$('.main-menu').css('transform','translateY(-100%)');
	
});

/*$('.mate').click(function(){
	$('#main-container').load('inc/matematica.html');
});

$('.rombo').click(function(){
	//$('#main-container').load('inc/algebra.html');
	aler("kjda");
});*/