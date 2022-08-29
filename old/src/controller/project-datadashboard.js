$(document).ready( () => {
    $("#burguer").click( () =>{
      $("#menuContent").slideToggle("slow"); 
    });
  }); 

  $('section#datadashboard').find('button')[0].addEventListener('click', () => {
    window.open("https://fiorellasaro.github.io/lim-2018-05-bc-core-am-datadashboard/src/");
  });

  $('section#datadashboard').find('button')[1].addEventListener('click', () => {
    window.open("https://github.com/fiorellasaro/lim-2018-05-bc-core-am-datadashboard");
  });
