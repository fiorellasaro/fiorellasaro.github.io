$(document).ready( () => {
	$("#burguer").click( () =>{
		$("#menuContent").slideToggle("slow"); 
	});
}); 

$('section#caesar').find('button')[0].addEventListener('click', () => {
	window.open("https://fiorellasaro.github.io/lim-2018-05-bc-core-am-cipher/src/");
});

$('section#caesar').find('button')[1].addEventListener('click', () => {
	window.open("https://github.com/fiorellasaro/lim-2018-05-bc-core-am-cipher");
});

/* let heightSection;
heightSection = $('#caesar').height(); */
/* $('.section-b').height(heightSection + 1); */
/* $('.section').height(heightSection + 1); */
/* $('.section-w').height(heightSection + 1); */