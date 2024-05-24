let phrases;
if (window.innerWidth>700){
  phrases = [
    `Benvenuto ${document.getElementById('Username').textContent.trim()}.`,
    `Controlla facilmente le condizioni della tua serra.`,
    `Gestisci l'irrigazione e la ventilazione della serra in un unico posto.`,
    `Monitora le temperature e l'umidità in tempo reale.`,
    `Configura l'orario e la durata dell'irrigazione con facilità.`,
    `Ricevi notifiche sullo stato delle tue piante direttamente sul tuo dispositivo.`,
    `Apri e chiudi le serre automaticamente in base alle condizioni meteorologiche.`,
    `Mantieni le tue piante felici e sane con il nostro sistema di gestione delle serre.`,
    `Risparmia tempo e fatica controllando le tue serre con un solo clic.`,
    `Sistema intelligente per garantire il benessere delle tue coltivazioni.`,
    `Tieni traccia delle attività di gestione della serra ovunque tu sia.`];
}
else{
  phrases = [
    `Benvenuto ${document.getElementById('Username').textContent.trim()}.`];
} 


  let phraseIndex = 0;
  
  function type() {
    const current = phraseIndex % phrases.length;
    const fullPhrase = phrases[current];
  
    if (isDeleting) {
      text = fullPhrase.substring(0, text.length - 1);
    } else {
      text = fullPhrase.substring(0, text.length + 1);
    }
  
    document.getElementById('text').textContent = text;
  
    let typeSpeed = 200;
  
    if (isDeleting) {
      typeSpeed /= 2;
    }
  
    if (!isDeleting && text === fullPhrase) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && text === '') {
      isDeleting = false;
      phraseIndex++;
      typeSpeed = 500;
    }
  
    setTimeout(type, typeSpeed);
  }
  
  let text = '';
  let isDeleting = false;
  
  
  document.addEventListener("DOMContentLoaded", function () {
      const mobileMenu = document.querySelector("#mobile");
      const nav = document.querySelector("nav");
  
      mobileMenu.addEventListener("click", function () {
          nav.classList.toggle("show-mobile");
  
          const icon = document.querySelector("#mobile i");
          icon.classList.toggle("fa-bars");
          icon.classList.toggle("fa-times");
      });
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
          link.addEventListener('click', function (event) {
              event.preventDefault();
              const targetId = this.getAttribute('href').substring(1);
              const mains = document.querySelectorAll('main');
              mains.forEach(main => {
                  if (main.id === targetId) {
                      main.style.display = 'block';
                  } else {
                      main.style.display = 'none';
                  }
              });
              navLinks.forEach(link => {
                  link.classList.remove('active');
              });
              this.classList.add('active');
          });
      });
      const mains = document.querySelectorAll('main');
      mains.forEach((main, index) => {
          if (index === 0) {
              main.style.display = 'block';
          } else {
              main.style.display = 'none';
          }
      });
  });



  //cambiamento colore
  const checkbox = document.querySelector(".input");
  const nav = document.querySelector("nav");
  const body = document.querySelector("body");
  const mobile = document.querySelector("#mobile");
  const typewriter  = document.querySelector(".typewriter ");
  const card = document.querySelector(".card ");
  const primaRiga = document.querySelector(".primaRiga ");
  const secondaRiga = document.querySelector(".secondaRiga ");
  const sidebar = document.querySelector(".sidebar ");
  const titoloSide = document.querySelector(".titoloSide ");
  const sideBarNotifiche = document.querySelector(".sideBarNotifiche ");
  

  checkbox.addEventListener("change", function() {
      if (this.checked) {
          nav.style.backgroundColor = "#000";
          body.style.backgroundColor = "#212121";
          body.style.color = "#fff";
          mobile.style.color = "#fff";
          sideBarNotifiche.style.color = "#fff";
          typewriter.style.backgroundColor = "#444";
          typewriter.style.boxShadow = "0px 2px 4px rgba(100, 100, 100, 0.5)";
          primaRiga.style.backgroundColor = "#444";
          secondaRiga.style.backgroundColor = "#444";
          sidebar.style.backgroundColor = "#444";
          titoloSide.style.backgroundColor = "#000";
      } else {
          nav.style.backgroundColor = "";
          body.style.backgroundColor = "";
          body.style.color = "";
          mobile.style.color = "";
          typewriter.style.backgroundColor = "";
          typewriter.style.boxShadow ="";
          primaRiga.style.backgroundColor = "";
          sidebar.style.backgroundColor = "";
          secondaRiga.style.backgroundColor = "";
          titoloSide.style.backgroundColor = "";
          sideBarNotifiche.style.color = "";
      }
  });


  var aumentaButton = document.querySelector('.aumentaTemp');
  var diminuisciButton = document.querySelector('.diminuisciTemp');
  var temperaturaDiv = document.querySelector('.TemperaturaValore');
  var temperaturaStato = document.querySelector('#temperature');


  aumentaButton.addEventListener('click', function() {
      var temperatura = parseInt(temperaturaDiv.innerText);
      temperatura++;
      temperaturaStato.value= temperatura;
      temperaturaDiv.innerText = temperatura + '°';
      temperaturaStato.innerText = temperatura + ' °C';
      
  });

  diminuisciButton.addEventListener('click', function() {
      var temperatura = parseInt(temperaturaDiv.innerText);
      temperatura--;
      temperaturaStato.value= temperatura;
      temperaturaDiv.innerText = temperatura + '°';
      temperaturaStato.innerText = temperatura + ' °C';
  });
  document.addEventListener("DOMContentLoaded", function() {
    var sidebarNotifiche = document.querySelector('.sideBarNotifiche');
    var sidebar = document.querySelector('.sidebar');

    sidebarNotifiche.addEventListener('click', function() {
        sidebar.classList.toggle('show-sidebar');
    });
});


  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("other-content").style.display = "none";
    document.querySelector('body').style.backgroundColor="#000";
    // Nascondi il loader dopo 3 secondi
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      // Mostra il resto del contenuto del body
      document.getElementById("other-content").style.display = "block";
      document.querySelector('body').style.backgroundColor="";
      type();
      document.body.classList.add("loaded");
    }, 3000);
  });
  