var horaAtual = new Date()
var hora = horaAtual.getHours()

// var horaTeste = 18

if (hora < 12){
    console.log('Bom dia!')
}else if(hora <= 18) {
    console.log('Boa Tarde!')
}else {
    console.log('Boa noite!')
}