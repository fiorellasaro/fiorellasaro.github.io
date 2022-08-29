$(document).ready( () => {
    $("#burguer").click( () =>{
      $("#menuContent").slideToggle("slow"); 
    });
  }); 

$('section#TCR').find('button')[0].addEventListener('click', () => {
    window.open("https://fiorellasaro.github.io/lim-2018-01-ux-marketplace/src/");
});

$('section#TCR').find('button')[1].addEventListener('click', () => {
    window.open("https://github.com/fiorellasaro/lim-2018-01-ux-marketplace");
});