$(document).ready( () => {
    $("#burguer").click( () =>{
      $("#menuContent").slideToggle("slow"); 
    });
  }); 

  $('section#foodmap').find('button')[0].addEventListener('click', () => {
    window.open("https://fiorellasaro.github.io/lim-2018-01-foodmap/src");
  });

  $('section#foodmap').find('button')[1].addEventListener('click', () => {
    window.open("https://github.com/fiorellasaro/lim-2018-01-foodmap");
  });