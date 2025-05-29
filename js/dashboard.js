document.addEventListener('DOMContentLoaded', function() {
    const btnAbrir = document.getElementById('btnAbrirChamado');
    const formSection = document.getElementById('formNovoChamado');
    const formChamado = document.getElementById('formChamado');
    const lista = document.getElementById('listaChamados');

    const statusEtapas = ['Aberto', 'Em andamento', 'Resolvido', 'Fechado'];

    // Alternar exibição do formulário
    btnAbrir.addEventListener('click', () => {
        formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
    });

    // Submissão do novo chamado
    formChamado.addEventListener('submit', function(event) {
        event.preventDefault();

        const descricao = document.getElementById('descricao').value;

        const card = document.createElement('div');
        card.className = 'pedidoCard';

        const descricaoEl = document.createElement('p');
        descricaoEl.innerHTML = `<strong>Descrição:</strong> ${descricao}`;

        const statusEl = document.createElement('p');
        statusEl.className = 'status';
        statusEl.innerHTML = `<strong>Status:</strong> ${statusEtapas[0]}`;
        statusEl.dataset.statusIndex = "0";

        const btnStatus = document.createElement('button');
        btnStatus.className = 'btn btnStatus';
        btnStatus.textContent = 'Atualizar Status';

        card.appendChild(descricaoEl);
        card.appendChild(statusEl);
        card.appendChild(btnStatus);

        lista.appendChild(card);

        formChamado.reset();
        formSection.style.display = 'none';
    });

    // Delegação de evento para atualização de status
    lista.addEventListener('click', function(event) {
        if (event.target.classList.contains('btnStatus')) {
            const card = event.target.closest('.pedidoCard');
            const statusEl = card.querySelector('.status');
            let currentIndex = parseInt(statusEl.dataset.statusIndex, 10);

            if (currentIndex < statusEtapas.length - 1) {
                currentIndex++;
                statusEl.dataset.statusIndex = currentIndex;
                statusEl.innerHTML = `<strong>Status:</strong> ${statusEtapas[currentIndex]}`;
            }

            if (currentIndex === statusEtapas.length - 1) {
                event.target.disabled = true;
                event.target.textContent = 'Pedido Fechado';
                event.target.classList.add('btn-disabled');
            }
        }
    });
});
