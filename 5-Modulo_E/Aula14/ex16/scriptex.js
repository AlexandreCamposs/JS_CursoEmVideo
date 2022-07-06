// function contar() {
//   var ini = document.getElementById("txti")
//   var inicio = Number(txti.value);
//   var f = document.getElementById("txtf");
//   var fim = Number(txtf.value)
//   var pass = document.getElementById("txtp");
//   var passo = Number(txtp.value)
//   var res = `Passo${inicio}`;

//   for (var i = inicio; i <= fim; i++) {
//     res.innerHTML = `${i}`;
//   }console.log(i);
// }


function contar() {
  var ini = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  var res = document.getElementById('resultado')

  if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ 
    window.alert("[ERRO]. Preenchar os campos Inínicio, Fim, Passo.")
    res.innerHTML = `Faltam dados, impossível contar.`
  }else {
    res.innerHTML = 'Contando:<br>'

    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (p <= 0) {
      window.alert("Passo inválido! Considerando passo 1.")
      p = 1
    }
    if (i < f) {
      //Contagem crescente
      for (let c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }else {
      //Contagem
      for(let c = i; c >= f; c -= p){
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}