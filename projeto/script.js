const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoPassoId);

        // Remove a classe ativo do passo atual
        atual.classList.remove('ativo');
        
        // Adiciona a classe ativo ao passo de destino (seja ele o próximo ou o anterior)
        proximoPasso.classList.add('ativo');
    });
});