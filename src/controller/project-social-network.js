$(document).ready( () => {
    $("#burguer").click( () =>{
      $("#menuContent").slideToggle("slow"); 
    });
  }); 

  $('section#socialNetwork').find('button')[0].addEventListener('click', () => {
    window.open("https://fiorellasaro.github.io/lim-2018-05-bc-core-am-socialnetwork/src/");
  });

  $('section#socialNetwork').find('button')[1].addEventListener('click', () => {
    window.open("https://github.com/fiorellasaro/lim-2018-05-bc-core-am-socialnetwork");
  });
