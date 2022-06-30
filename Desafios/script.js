// var a = window.document.querySelector('div.button')
var a = window.document.getElementById("button1");
var b = window.document.querySelector("div#button2");
var c = window.document.querySelector("div#button3");



function clicar(x) {
  console.log(x);
  if (x.id === "button1") {
    x.innerHTML = "Clicou";
    x.style.background = "blue";
    x.style.color = "white";
  }else if (x.id === 'button2'){
    x.innerHTML = "Clicou";
    x.style.background = "blue";
    x.style.color = "white";
  }else if(x.id === 'button3'){
    x.innerHTML = "Clicou";
    x.style.background = "blue";
    x.style.color = "white";
  }
}

function entrou(i){
  if(i.id == 'button1'){
    a.innerHTML = 'Entrou'
  }else if(i.id == 'button2'){
    b.innerHTML = 'Entrou'
  }else if(i.id =='button3'){
    c.innerHTML = 'Entrou'
  }
}

function sair(y){
  if(y.id =='button1'){
    a.innerHTML = 'Saiu'
    a.style.background = 'darkgray'
    a.style.color = 'black'
  }else if(y.id =='button2'){
    b.innerHTML = 'Saiu'
    b.style.background = 'darkgray'
    b.style.color = 'black'
  }else if(y.id == 'button3'){
    c.innerHTML = 'Saiu'
    c.style.background = 'darkgray'
    c.style.color = 'black'
  }
} 