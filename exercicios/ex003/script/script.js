function contar() {
            var inicio = document.getElementById("ninicio")
            var fim = document.getElementById("nfim")
            var passo = document.getElementById("npasso")
            var resultado = document.getElementById("resultado");

            // Verifica se algum campo está vazio
            if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
                window.alert("Impossível contar! Preencha todos os campos.");
            }
            else {
             resultado.innerHTML = "Contando: <br>";
             let i = Number(inicio.value);
             let f = Number(fim.value);
             let p = Number(passo.value);
            if (p <= 0) {
                window.alert("passo inválido! considerando passo 1");
                p = 1;
            }
             if( i < f) {
                //contagem crescente
                for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449} `;
            }

            resultado.innerHTML += `\u{1F3C1}`;

             }
             else {
                //contagem decrescente
                for (let c = i; c >= f; c -= p ) {
                    resultado.innerHTML += `${c} \u{1F449} `;
                }
                resultado.innerHTML += `\u{1F3C1}`;
             }


            

            }

            

}