// 1)- Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatória de um campeonato. O programa deve conter três funções (a serem executadas no evento click de cada botão) para: 1) validar o preenchimento, adicionar um clube ao vetor e listar os clubes; 2) listar os clubes (se houver); 3) montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo e assim por diante. Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja ímpar.

//Array
const clubes = []

//Entrada de dados
const Clube = document.getElementById("inClube")
const outLista = document.getElementById("outLista")

// botão
const Add = document.getElementById("btnadd")
const Listar = document.getElementById("btnlist")
const Tabela = document.getElementById("btntable")

//fazendo a lógica 
const adicionarClube = () => {
    let nome = Clube.value
    //Validando (Se clicar no botão e o input estiver vazio, ele vai notificar para fazer novamente)
    if(nome === ''){
    alert('Digite o nome de um clube')
    return
    }

    //Pegando o clube informado e enviando para o array
    clubes.push(nome)

    //Limpar o input
    Clube.value = '';
}
Add.addEventListener('click', adicionarClube);

//Pedindo para imprimir as informações guardadas no array
Listar.addEventListener('click', ()=>{
    outLista.innerHTML = `${clubes.join('\n')}`
});


//montar a tabela de jogos
//Lógica caso o número de clubes informados seja ímpar.
Tabela.addEventListener('click', () => {
if(clubes.length % 2 === 0){
    //fazer funcção
    


}else{
    return Alert("Digite uma quantidade de times quer seja PAR para que seja feita a tabela de jogos")
    
    }
});