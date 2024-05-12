document.addEventListener("DOMContentLoaded", function() {
    // Gestisci il clic sul link "Skills"
    var skillsLink = document.querySelector("ul li a[href='#skills']");
    if (skillsLink) {
        skillsLink.addEventListener("click", function(event) {
            event.preventDefault(); 

            var targetId = this.getAttribute("href").substring(1); 
            var targetSection = document.getElementById(targetId); 
            
            if (targetSection) {
                window.location.href = "#" + targetId; // Naviga alla sezione
                location.reload(); // Ricarica la pagina
            }
        });
    }
    setTimeout(() => {
        type();
    }, 300);
    
    
});

const nameSpan = document.getElementById('nameSpan');
const name = "Parhar Harshvir Singh";
let isDeleting = false;
let currentIndex = 0;

function type() {
  const currentText = name.substring(0, currentIndex);

  nameSpan.textContent = currentText;

  if (!isDeleting) {
    currentIndex++;

    if (currentIndex > name.length) {
      isDeleting = true;
    }
  } else {
    currentIndex--;

    if (currentIndex === 0) {
      isDeleting = false;
    }
  }

  setTimeout(type, 200);
}


