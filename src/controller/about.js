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

document.getElementById('linkedinIcon').addEventListener('mouseover', () => {

  document.getElementById('linkedinIcon').src= "assets/img/linkedin-g.png";

}); 

document.getElementById('linkedinIcon').addEventListener('mouseout', () => {

  document.getElementById('linkedinIcon').src= "assets/img/linkedin.png";
}); 

document.getElementById('mailIcon').addEventListener('mouseover', () => {

  document.getElementById('mailIcon').src= "assets/img/gmail-g.png";

}); 

document.getElementById('mailIcon').addEventListener('mouseout', () => {

  document.getElementById('mailIcon').src= "assets/img/gmail.png";
}); 

document.getElementById('githubIcon').addEventListener('mouseover', () => {

  document.getElementById('githubIcon').src= "assets/img/github-sign-g.png";

}); 

document.getElementById('githubIcon').addEventListener('mouseout', () => {

  document.getElementById('githubIcon').src= "assets/img/github-sign.png";
}); 



document.getElementById('cv-image').addEventListener('click', () => {
  window.open('../view/assets/CV Fiorella Sánchez Rodríguez.pdf','_blank');
}); 

document.getElementById('button').addEventListener('click', () => {
  window.open('../view/assets/CV Fiorella Sánchez Rodríguez.pdf','_blank');
}); 



