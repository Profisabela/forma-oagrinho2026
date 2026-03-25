// 1. Função para trocar as "páginas"
function mudarPagina(idPaginaAlvo) {
    // Esconder todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => pagina.classList.remove('ativa'));

    // Tirar o destaque de todos os botões
    const botoes = document.querySelectorAll('.nav-btn');
    botoes.forEach(botao => botao.classList.remove('ativo'));

    // Mostrar a página escolhida e destacar o botão
    document.getElementById(idPaginaAlvo).classList.add('ativa');
    document.getElementById('btn-' + idPaginaAlvo).classList.add('ativo');
}

// Inicializar o simulador quando a página carrega
window.addEventListener('load', function() {
    atualizarSimulador();
});

// 2. Função principal do Simulador
function atualizarSimulador() {
    // Pegar os valores das barras deslizantes
    const temp = document.getElementById('temp').value;
    const umidAr = document.getElementById('umid-ar').value;
    const umidSolo = document.getElementById('umid-solo').value;

    // Atualizar os números na tela
    document.getElementById('temp-val').innerText = temp;
    document.getElementById('umid-ar-val').innerText = umidAr;
    document.getElementById('umid-solo-val').innerText = umidSolo;

    // Elementos de feedback visual
    const emoji = document.getElementById('emoji-planta');
    const mensagem = document.getElementById('mensagem-status');
    const painelResultado = document.querySelector('.resultado');

    // Lógica para morangos (Condições ideais aproximadas)
    // Temp: 15 a 25 | Umidade do Ar: 60 a 80 | Umidade do Solo: 50 a 80
    
    if (temp > 30) {
        emoji.innerText = "🥀☀️";
        mensagem.innerText = "Atenção: Muito quente! A planta está sofrendo estresse térmico e desperdiçando água.";
        painelResultado.style.borderColor = "#f44336"; // Vermelho
        painelResultado.style.backgroundColor = "#ffebee";
    } 
    else if (temp < 10) {
        emoji.innerText = "🥶❄️";
        mensagem.innerText = "Atenção: Muito frio! O crescimento do morango vai paralisar.";
        painelResultado.style.borderColor = "#2196f3"; // Azul
        painelResultado.style.backgroundColor = "#e3f2fd";
    }
    else if (umidAr > 85) {
        emoji.innerText = "🍄💧";
        mensagem.innerText = "Perigo para o ambiente: Umidade do ar excessiva gera risco de fungos, exigindo uso de agrotóxicos. Reduza a umidade!";
        painelResultado.style.borderColor = "#9c27b0"; // Roxo
        painelResultado.style.backgroundColor = "#f3e5f5";
    }
    else if (umidSolo < 40) {
        emoji.innerText = "🌵🏜️";
        mensagem.innerText = "Atenção: Solo muito seco! As raízes não conseguem absorver nutrientes.";
        painelResultado.style.borderColor = "#ff9800"; // Laranja
        painelResultado.style.backgroundColor = "#fff3e0";
    }
    else if (umidSolo > 90) {
        emoji.innerText = "🌊🌱";
        mensagem.innerText = "Desperdício: Solo encharcado. As raízes podem apodrecer e você está gastando água à toa.";
        painelResultado.style.borderColor = "#ff9800"; 
        painelResultado.style.backgroundColor = "#fff3e0";
    }
    else {
        // Condição Ideal Sustentável
        emoji.innerText = "🍓🌱✨";
        mensagem.innerText = "Sustentabilidade atingida! O morangueiro está em equilíbrio, produzindo muito e consumindo a quantia exata de água e energia.";
        painelResultado.style.borderColor = "#4caf50"; // Verde
        painelResultado.style.backgroundColor = "#e8f5e9";
    }
}