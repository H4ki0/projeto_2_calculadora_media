const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />';
const atividade = [];
const nota = []; 
const spanAprovado = '<span class="resultado aprovado" >Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado" >Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima'));

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizarMediaFinal();
});

function adicionarLinha() {
    const nomeAtividade = document.getElementById('nome-atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if (atividade.includes(nomeAtividade.value)) {
        alert(`A atividade ${nomeAtividade.value} já foi inserida !`)
        nomeAtividade.value = '';
    } else {

    atividade.push(nomeAtividade.value);
    nota.push(parseFloat(notaAtividade.value));
    
    let linha = `<tr>`;
    linha += `<td> ${nomeAtividade.value}</td>`;
    linha += `<td> ${notaAtividade.value}</td>`;
    linha += `<td> ${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td`;
    linha += `</tr>`;

    linhas += linha;

    nomeAtividade.value = '';
    notaAtividade.value = '';
}}

function atualizarTabela() {
    const corpo = document.querySelector('tbody');
    corpo.innerHTML = linhas;
};

function atualizarMediaFinal() {
    const media = calculoMedia();

    document.getElementById('media-valor').innerHTML = media.toFixed(2);
    document.getElementById('media-resultado').innerHTML = media >= notaMinima ? spanAprovado : spanReprovado ;
}

function calculoMedia() {
    let soma = 0;

    for (let i = 0 ; i < nota.length ; i++) {
        soma += nota[i];
    }

    return soma / nota.length;
}