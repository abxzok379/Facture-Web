




function maFonction(){
var cell, ligne, boutton;
// Récupère l'id de la table qui sera modifié
var tableau = document.getElementById("tableau01");
boutton = document.createElement("input");
boutton.type = "button";
boutton.className = "boutton";
boutton.innerHTML = "fsdf";

ligne = tableau.insertRow(-1);

cell = ligne.insertCell(0);
cell.innerHTML =  document.getElementById("inputNom").value;
cell = ligne.insertCell(1);
cell.innerHTML = document.getElementById("inputPrix").value;
cell = ligne.insertCell(2);
cell.appendChild(boutton);
document.querySelector(".boutton").innerHTML = "Supprimer";


}
