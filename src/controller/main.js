$(document).ready( () => {
  $("#burguer").click( () =>{
    $("#menuContent").slideToggle("slow"); 
  });
}); 

document.getElementById('myProjects').addEventListener('click', () => {
 window.location.href = "view/projects.html";
}); 