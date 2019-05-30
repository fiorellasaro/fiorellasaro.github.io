$(document).ready( () => {
  $("#burguer").click( () =>{
    $("#menuContent").slideToggle("slow"); 
  });
}); 

document.getElementById('myProjects').addEventListener('click', () => {
 window.location.href = "src/view/projects.html";
}); 

document.getElementById('projectsButton').addEventListener('click', () => {
  window.location.href = "src/view/projects.html";
 }); 



 document.getElementById('linkedinIcon').addEventListener('mouseover', () => {

  document.getElementById('linkedinIcon').src= "src/view/assets/img/linkedin-w.png";

}); 

 document.getElementById('linkedinIcon').addEventListener('mouseout', () => {

  document.getElementById('linkedinIcon').src= "src/view/assets/img/linkedin.png";
}); 

document.getElementById('mailIcon').addEventListener('mouseover', () => {

  document.getElementById('mailIcon').src= "src/view/assets/img/gmail-w.png";

}); 

document.getElementById('mailIcon').addEventListener('mouseout', () => {

  document.getElementById('mailIcon').src= "src/view/assets/img/gmail.png";
}); 

document.getElementById('githubIcon').addEventListener('mouseover', () => {

  document.getElementById('githubIcon').src= "src/view/assets/img/github-sign-w.png";

}); 

document.getElementById('githubIcon').addEventListener('mouseout', () => {

  document.getElementById('githubIcon').src= "src/view/assets/img/github-sign.png";
}); 
