let nombreSecret = Math.floor(Math.random() * 100) + 1;
let essais = 0
let partieTerminee = false;

const champ = document.getElementById("guess");
const bouton = document.getElementById("deviner");
const resultat = document.getElementById("result");
const compteur = document.getElementById("attempts");
const rejouer = document.getElementById("rejouer");

bouton.addEventListener("click", function() {
    if (partieTerminee) {
        return;
    }

    if (champ.value === "") {
        resultat.textContent = "Entre un nombre !";
        return;
    }

    const nombreJoueur = Number(champ.value);

    if (nombreJoueur < 1 || nombreJoueur > 100) {
        resultat.textContent = "Entre un nombre entre 1 et 100 !";
        return;
    }

    essais = essais + 1;
    compteur.textContent = "Nombre d'essais : " + essais;

    if (nombreJoueur < nombreSecret) {
        resultat.textContent = "Trop petit !";
    }

    else if (nombreJoueur > nombreSecret) {
        resultat.textContent = "Trop grand !";
    }
    
    else {
        resultat.textContent = "🎉 Bravo ! Tu as trouvé !";
        partieTerminee = true;
    }
});

rejouer.addEventListener("click", function () {
    essais = 0;

    partieTerminee = false;

    nombreSecret = Math.floor(Math.random() * 100) + 1;

    resultat.textContent = "";
    compteur.textContent = "";
    champ.value = "";
});

champ.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        bouton.click();
    }
});