// external scripts
function swap(id1, id2) {
  var a=document.getElementById(id1).textContent;
  var b=document.getElementById(id2).textContent;
  document.getElementById(id2).textContent = a;
  document.getElementById(id1).textContent = b;
  
}
// Accordion 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
