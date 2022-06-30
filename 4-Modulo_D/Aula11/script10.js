function clicar() {
  var txtv = window.document.querySelector("input#txtvel");
  var res = window.document.querySelector("div#res");
  var vel = Number(txtv.value);
  res.innerHTML = `Sua velocidade atual é de: <strong>${vel}</strong> Km/h`;
  if (vel > 60) {
    res.innerHTML = `<p>Você ultrapassou a velocidade permitida e foi <strong>MULTADO!</strong></p>`
    res.innerHTML += `<p>Dirija sempre usando cinto de segurança.</p>`
  }
}
