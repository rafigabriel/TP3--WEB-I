function toggleTorra() {
    const bebidas = document.getElementsByName('bebida');
    let isChocolateSelected = false;

    bebidas.forEach(bebida => {
        if (bebida.checked && bebida.value === 'chocolate') {
            isChocolateSelected = true;
        }
    });

    const torraOptions = document.getElementsByName('torra');
    torraOptions.forEach(option => {
        option.disabled = isChocolateSelected;
    });
}

function fazerPedido() {
    alert("Pedido realizado com sucesso!");
}
