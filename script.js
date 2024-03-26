let inputs = document.getElementById("inpu");
let text = document.querySelector(".text");

function Add() {
  if (inputs.value === "") {
    alert("plz enter a text");
  } else {
    let newElem = document.createElement("ul");

    newElem.innerHTML = `${inputs.value}    <i class="fa fa-trash-o"></i>`;
    text.appendChild(newElem);
    newElem.querySelector("i").addEventListener("click", remove);
    function remove() {
      newElem.remove();
    }
    inputs.value = "";
  }
}
