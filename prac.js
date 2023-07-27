// Create a "close" button and append it to each list item

let contador = 0;

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
const conta = document.getElementById("der");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const borrar = document.getElementById("der");
    var div = this.parentElement;
    div.style.display = "none";
    contador--;
    borrar.textContent = contador
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      console.log(ev.target.classList[0]);
      ev.target.classList.toggle("checked");
      if (ev.target.classList[0]==='checked') {
        contador++
      }else{
        contador--;
      }
      //ev.target.classList[0]==='checked' ? contador++ : contador--;
      conta.textContent=contador
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  verificar(inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert(" write somenting");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var img = document.createElement("img");
  img.className = "close";
  img.src = "./borrar.png";
  li.appendChild(img);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.remove()
    };
  }
}
//
function verificar (tarea){
  
console.log(tarea);
}