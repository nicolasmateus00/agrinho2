let tamanhoFonte = 16;

function mostrarInfo(tipo){

    let info = document.getElementById("informacoes");

    if(tipo === "reciclagem"){
        info.innerHTML = `
        <h2>♻️ Reciclagem</h2>
        <p>
        A reciclagem reduz a quantidade de lixo nos aterros,
        economiza recursos naturais e diminui a poluição.
        Separar corretamente os resíduos ajuda muito o planeta.
        </p>`;
    }

    if(tipo === "agua"){
        info.innerHTML = `
        <h2>💧 Água</h2>
        <p>
        A água é um recurso limitado. Fechar torneiras,
        consertar vazamentos e evitar desperdícios são atitudes
        importantes para sua preservação.
        </p>`;
    }

    if(tipo === "florestas"){
        info.innerHTML = `
        <h2>🌳 Florestas</h2>
        <p>
        As florestas produzem oxigênio, regulam o clima
        e abrigam milhares de espécies de animais e plantas.
        </p>`;
    }

    if(tipo === "energia"){
        info.innerHTML = `
        <h2>⚡ Energia Sustentável</h2>
        <p>
        Fontes renováveis como energia solar e eólica ajudam
        a reduzir a emissão de gases poluentes.
        </p>`;
    }
}

function aumentarFonte(){
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte(){
    tamanhoFonte -= 2;

    if(tamanhoFonte < 12){
        tamanhoFonte = 12;
    }

    document.body.style.fontSize = tamanhoFonte + "px";
}

function modoEscuro(){
    document.body.classList.toggle("dark");
}

function mostrarDica(){

    let dicas = [
        "🌱 Plante uma árvore.",
        "💧 Economize água durante o banho.",
        "♻️ Separe o lixo reciclável.",
        "🚲 Utilize bicicleta quando possível.",
        "🔌 Desligue aparelhos sem uso.",
        "🛍️ Use sacolas reutilizáveis."
    ];

    let sorteio = Math.floor(Math.random() * dicas.length);

    document.getElementById("dica").innerHTML = dicas[sorteio];
}
