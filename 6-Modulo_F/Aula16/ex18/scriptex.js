var txtn = document.getElementById("txtn");
var txtt = document.getElementById("txtt");
var res = document.getElementById("res");
var lista = []

function isNumero(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  }else {
    return false
  }
}
function inLista(n,l) {
  if (l.indexOf(Number(n)) != -1){
    return true
  }else {
    return false
  }
}

function adicionar() {
  if(isNumero(txtn.value) && !inLista(txtn.value,lista)) {
    lista.push(Number(txtn.value))
    console.log(lista)
    let item = document.createElement('option')
    item.text = `Valor ${txtn.value} adicionado`
    txtt.appendChild(item)
    txtn.value = ''
    txtn.focus()
    res.innerHTML = ''
  } else {
    window.alert("Valor inválido ou já encontrado na lista");
  }
}

function finaliza() {
  if(lista.length == 0) {
    window.alert('Adicione valores antes de finalizar.')
  }else {
    let tot = lista.length
    let maior = lista[0]
    let menor = lista[0]
    let soma = 0
    let media = 0
    for (let pos in lista) {
      soma += lista[pos]
      if(lista[pos] > maior)
        maior = lista[pos]
      if(lista[pos] < menor) 
        menor = lista[pos]
    }
    media = soma / tot
    console.log(tot)
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores foi: ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores é:  ${media}</p>`
  }
}
