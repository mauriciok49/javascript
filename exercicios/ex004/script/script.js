function tabuada() {
    let num = document.getElementById('num');
    let tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número entre 1 e 10');
        
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = ''
        while (c <= 10 ) {
            //cria um elemento option dentro do select do html
            let item = document.createElement('option')
            //adiciona os valores
            item.text = `${n} x ${c} = ${n*c}`
            //coloca o valor de cada respectiovo tab
            item.value = `tab${c}`
            //adiciona um elemento filho dentro do select, que é o item(option)
            tab.appendChild(item)
            //incrementa os elementos do loop
            c++
        }
    }
    
}