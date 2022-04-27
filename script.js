const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const todolist = document.querySelector("#todolist");
let i = 0;

// Empecher le rechargement de la plage
form.onsubmit = (e) => {
  e.preventDefault();
};
todolist.style = "display:none";

btn.addEventListener("click", () => {
  todolist.style = "display:block";
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const btnTd = document.createElement("button");
  const finish = document.createTextNode("Terminer");
  const btnTd2 = document.createElement("button");
  const del = document.createTextNode("Supprimer");
  const btnTd3 = document.createElement("button");
  const edit = document.createTextNode("Modifier");
  td.textContent = input.value;
  tr.appendChild(td);
  document.querySelector("#todolist").appendChild(tr);
  btnTd.appendChild(finish);
  btnTd2.appendChild(del);
  btnTd3.appendChild(edit);
  tr.appendChild(btnTd);
  tr.appendChild(btnTd2);
  tr.appendChild(btnTd3);
  btnTd.addEventListener("click", () => {
    td.style = "text-decoration:line-through";
    i++;
    if (i % 2 === 0) {
      td.style = "text-decoration:none";
    }
  });
  btnTd2.addEventListener("click", () => {
    tr.remove();
  });
  btnTd3.addEventListener("click", () => {
    const change = document.createElement("input");
    tr.append(change);
    td.remove();
  });
});
