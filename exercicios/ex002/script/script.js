function verificaridade() {
            let anoAtual = new Date().getFullYear();
            var fano = document.getElementById("txtano")
            var resultado = document.getElementById("resultado");
            if (fano.value.length == 0 || fano.value > anoAtual) {
                window.alert('[erro] Verifique os dados e tente novamente!')
            }else {
                var fsex = document.getElementsByName("sexo")
                var idade = anoAtual - Number(fano.value)
                var genero = ''
                var img = document.createElement('img')
                img.setAttribute('id', 'imagem')
                if (fsex[0].checked) {
                    genero = 'homem'
                    if (idade >= 0 && idade < 10) {
                        img.setAttribute('src', 'imagens/childman.png')
                    }else if (idade < 21) {
                        img.setAttribute('src', 'imagens/youngman.png')
                    }else if (idade > 21 && idade < 50) {
                        img.setAttribute('src', 'imagens/midleman.png')
                    }else {
                        img.setAttribute('src', 'imagens/oldman.png')
                    }

                } else if (fsex[1].checked) {
                    genero = 'mulher'
                    if (idade >= 0 && idade < 10) {
                        img.setAttribute('src', 'imagens/childwoman.png')
                    }else if (idade < 21) {
                        img.setAttribute('src', 'imagens/youngwoman.png')
                    }else if (idade > 21 && idade < 50) {
                        img.setAttribute('src', 'imagens/midlewoman.png')
                    }else {
                        img.setAttribute('src', 'imagens/oldwoman.png')
                    }
                } else {
                    window.alert('[erro] Verifique os dados e tente novamente!')
                }
            }
            resultado.style.textAlign = 'center';
            resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            resultado.appendChild(img);
            img.style.margin = 'auto';
            img.style.marginTop = '10px';
        

        }