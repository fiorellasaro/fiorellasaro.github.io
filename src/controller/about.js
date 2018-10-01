$(document).ready( () => {
    $("#burguer").click( () =>{
      $("#menuContent").slideToggle("slow"); 
    });
  }); 

document.getElementById('cv-image').addEventListener('mouseover', () => {

  document.getElementById('cv-image').src= "assets/img/file green.png";

}); 

document.getElementById('cv-image').addEventListener('mouseout', () => {

  document.getElementById('cv-image').src= "assets/img/file white.png";
}); 


document.getElementById('cv-image').addEventListener('click', () => {
  window.open('../view/assets/CV Fiorella Sánchez Rodríguez.pdf','_blank');
}); 

document.getElementById('button').addEventListener('click', () => {
  window.open('../view/assets/CV Fiorella Sánchez Rodríguez.pdf','_blank');
}); 



