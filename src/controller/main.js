$(document).ready( () => {
  $("#burguer").click( () =>{
    $("#menuContent").slideToggle("slow"); 
  });
}); 

document.getElementById('myProjects').addEventListener('click', () => {
 window.location.href = "view/projects.html";
}); 

document.getElementById('projectsButton').addEventListener('click', () => {
  window.location.href = "view/projects.html";
 }); 


 $('.projectButton')[0].addEventListener('click', () => {
  window.location.href = "view/project-market-place.html";
});

$('.projectButton')[1].addEventListener('click', () => {
  window.location.href = "view/project-guest-registration.html";
});
$('.projectButton')[2].addEventListener('click', () => {
  window.location.href = "view/project-foodmap.html";
});
$('.projectButton')[3].addEventListener('click', () => {
  window.location.href = "view/project-social-network.html";
});
$('.projectButton')[4].addEventListener('click', () => {
  window.location.href = "view/project-datadashboard.html";
});
$('.projectButton')[5].addEventListener('click', () => {
  window.location.href = "view/project-cipher.html";
});
 