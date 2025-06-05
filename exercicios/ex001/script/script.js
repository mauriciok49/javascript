var paragrafo = document.getElementById('paragrafo');
        var imagem = document.getElementById('imagem');
        var hora = new Date().getHours();
        var corpo = document.getElementById('body')
        var mensagem = document.getElementById('mensagem');
        
        if (hora < 0 || hora > 23) {
            paragrafo.innerHTML = 'Hora invalida';
            imagem.src = 'imagens/erro.png';
            body.style.background = '#ff0000';
        }else {
            if (hora <= 12) {
            paragrafo.innerText = `São ${hora} horas da manhã. Bom Dia!`;
            imagem.src = 'imagens/manha.png';
            body.style.background = '#fff09e';
        } else if (hora <= 18) {
            paragrafo.innerText = `São ${hora} horas da tarde. Boa Tarde!`;
            imagem.src = 'imagens/tarde.png';
            body.style.background = '#f5bb50';
        } else {
            paragrafo.innerHTML = `São ${hora} horas da noite. Boa Noite!`
            mensagem.style.color = '#f1f1f1';
            imagem.src = 'imagens/noite.png';
            body.style.background = '#0b2d47';
        }
        }