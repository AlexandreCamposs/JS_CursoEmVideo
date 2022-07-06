function clicar() {
  var txtv = window.document.querySelector("input#txtvel");
  console.log(txtv);
  var res = window.document.querySelector("div#res");
  console.log(res);
  var vel = Number(txtv.value);
  console.log(vel);
  res.innerHTML = `Sua velocidade atual é de: <strong>${vel}</strong> Km/h`;
  if (vel > 60) {
    res.innerHTML = `<p>Você ultrapassou a velocidade permitida e foi <strong>MULTADO!</strong></p>`
    res.innerHTML += `<p>Dirija sempre usando cinto de segurança.</p>`
  }
}
