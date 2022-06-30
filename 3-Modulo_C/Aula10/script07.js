function somar() {
  var tn1 = window.document.getElementById('txtn1'); //Selecionando por ID
  var tn2 = window.document.querySelector('input#txtn2'); //Selecionando por Seletor
  var res = window.document.getElementById('res'); //Selecionando por ID
  var n1 = Number.parseFloat(tn1.value);
  var n2 = Number.parseFloat(tn2.value);
  var s = n1 + n2

  res.innerHTML = `A soma entre ${n1} e ${n2} é igual a : <strong>${s}</strong> `
}
