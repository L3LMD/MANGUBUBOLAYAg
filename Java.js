let total = 0;

function ajouterCommande(nom, prix) {
  const liste = document.getElementById("liste-commandes");
  const item = document.createElement("li");
  item.textContent = `${nom} - ${prix} CDF`;
  liste.appendChild(item);
  
  total += prix;
  document.getElementById("total").textContent = total;
}
