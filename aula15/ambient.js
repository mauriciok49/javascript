let num = [5, 8 , 2, 9, 3]
num.sort( )
console.log(`os valores do vetor sao ${num}`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
console.log(`o comprimento do vetor é de ${num.length} posições`)
let pos = num.indexOf(9)
if (pos === -1) {
    console.log(`o valor nao foi encontrado`)
} else {
    console.log(`o valor 8 esta na posicao ${pos} `)

}
