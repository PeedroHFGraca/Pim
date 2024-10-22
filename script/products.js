const precoShimeji = 3.75;

function adicionar() {
    let pesoInput = document.getElementById('peso');
    let pesoAtual = parseFloat(pesoInput.value);

    pesoAtual += 0.1; // adicionar 100g 
    pesoInput.value = pesoAtual.toFixed(1);

    atualizarValor(pesoAtual); // atualiza o valor total
}

function remover() {
    let pesoInput = document.getElementById('peso');
    let pesoAtual = parseFloat(pesoInput.value);

    if (pesoAtual > 0) {
        pesoAtual -= 0.1; // remove 100g
    }
    pesoInput.value = pesoAtual.toFixed(1);

    atualizarValor(pesoAtual); // atualiza o valor total
}

function atualizarValor(pesoAtual) {
    let valorInput = document.getElementById('valor');
    let valorAtual = precoShimeji * pesoAtual;

    valorInput.textContent = valorAtual.toFixed(2); // fixa em duas casas decimais
}