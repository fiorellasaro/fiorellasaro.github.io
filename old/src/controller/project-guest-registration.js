$(document).ready( () => {
    $("#burguer").click( () =>{
      $("#menuContent").slideToggle("slow"); 
    });
  }); 

$('section#comunal').find('button')[0].addEventListener('click', () => {
    window.open("https://fiorellasaro.github.io/proyecto-final-common-core/src/");
});

$('section#comunal').find('button')[1].addEventListener('click', () => {
    window.open("https://github.com/fiorellasaro/proyecto-final-common-core");
});
