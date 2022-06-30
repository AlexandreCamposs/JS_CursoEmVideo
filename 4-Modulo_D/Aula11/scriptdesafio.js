function clicar() {
  console.log(clicar);

  var nome = document.getElementById("nasc").value;
  var res = document.getElementById("resultado");
//   res.innerHTML = `Sua nascionalidade é : ${nome}`;
  if (nome ==  'Brasil' || nome == 'brasil') {
    res.innerHTML = `Você é <strong> Brasileiro.<strong/>`;
  } else {
    res.innerHTML = `Você é <strong> Estrangeiro.</strong>`;
  }
}
