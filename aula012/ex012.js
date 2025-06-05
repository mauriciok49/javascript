var agora = new Date()
var hora = agora.getHours()

if (hora < 0 || hora > 23) {
    console.log('Hora inválida!')
}else {
    if (hora <= 12) {
    console.log(`sao ${hora} horas da manhã. bom dia!`)
} else if (hora <= 18) {
    console.log(`sao ${hora} horas da tarde. Boa tarde!`)
} else {
    console.log(`sao ${hora} horas da noite. Boa Noite!`)
}
}