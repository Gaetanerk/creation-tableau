const form = document.querySelector("#form");
const tablo = document.querySelector("#tablo");
const txt = document.querySelector("#txt");

//comment empecher le rechargement de la page quand on valide un formulaire
form.onsubmit = (e) => {
  e.preventDefault();
  alert("ma page ne se rafraichit pas");

  //ajouter le texte de mon input dans mon tableau
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.textContent = txt.value;
  tr.appendChild(td);
  document.querySelector("#tablo").appendChild(tr);
};
