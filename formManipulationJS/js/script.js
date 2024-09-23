function meuEscopo() {
    /* 
    =================================================================
    Usamos querySelector para selecionar esse elemento. O window.document 
    faz referência ao documento HTML da página atual.
    ==================================================================
    */
    const form = window.document.querySelector('.form');
    const resultado = window.document.querySelector('.resultados');
    //-----------------------------------------------------------------------
    //Crinado um array para guardar os dados.
    const pessoas = [];
    //-----------------------------------------------------------------------
    
    // Criando uma função com um argumento.
    function recebeEvento(evento) {
        /*
        Quando chamar o método -> addEventListener 
        esse argumento se tornara um evento 
        */
        evento.preventDefault();
        //----------------------------------------
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const objetoPessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        }

        pessoas.push(objetoPessoa);

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p><br> `;
    }

    form.addEventListener('submit', recebeEvento);
}
meuEscopo();