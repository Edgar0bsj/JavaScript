function meuEscopo(){
    const form = window.document.querySelector('.form');
    const resultado = window.document.querySelector('.resultados');

    const pessoas = [];

    function recebeEvento(evento){
        evento.preventDefault();

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