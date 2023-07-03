var recenzije = document.querySelectorAll('.recenzija');

function prikaziRecenzije() {
  for (var i = 0; i < recenzije.length; i++) {
    (function(index) {
      setTimeout(function() {
        recenzije[index].style.opacity = 1;
        recenzije[index].style.transform = 'translateY(0)';
      }, index * 1000); // Promijenite 500 u željeni interval prikaza između recenzija
    })(i);
  }
}

prikaziRecenzije();
