//window.alert('Mensagem JavaScript..'); //Mensagem.

//window.confirm('Esta gostando de JS?') //Pergunta "Confirmação".

var n1 = Number.parseFloat(window.prompt('Digite um número: ')) // Pergunta "Digitar".
var n2 =Number.parseFloat( window.prompt('Digite outro número: ')) //prompt lê todo dado como string para ler o número dever ser feito conversão de string para number.
var soma = n1 + n2
//(number  + number ) adição
//(string + string ) concatenação
window.alert(`A soma de ${n1} e ${n2} é =  ${soma}`) // concatenação