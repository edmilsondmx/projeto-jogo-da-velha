//Obtendo elementos do DOM com que vamos interagir

let casas = document.getElementsByTagName("input"); //pega lista de casas do tabuleiro
let reiniciar = document.getElementById("reiniciar"); //pega botão de reiniciar jogo
let label_jogador = document.getElementById("jogador") //pega label do jogador que tem a vez
let label_vencedor = document.getElementById("vencedor")


//definindo variáveis de estado do jogo
var jogador = '_'; //Define jogador atual(_ = jogador indefinido; X = jogador X; O = jogador O)
var vencedor = '_'; //Define se há vencedor ou não(_ = jogador indefinido; X = jogador X; O = jogador O)

sortearJogador(); //escolhe aleatoriamente o jogador inicial


//define a resposta ao eventode clique nas casas do tabuleiro
for(var i = 0; i < 9; i++){
    casas[i].addEventListener('click', (event) => {
        //se a casa estiver vazia e ninguém tiver vencido a partida
        if( (event.target.value == '_') && (vencedor == '_')){
            event.target.value = jogador; //preenche a casa com X ou O
            event.target.style.color = "black";//torna o valor da casa visivel
            event.target.style.fontWeight = "bold"

            trocaJogador(); //função que troca a vez do jogador

            vencedor = vitoria(); // Executa a função vitoria(), retorna vencedor da partida se houver

            //se o vencedor existe, imprime
            if(vencedor != '_' && vencedor != "Deu velha, Ninguém ganhou!"){
                label_vencedor.innerHTML = `"${vencedor}" venceu a partida!`;
                label_vencedor.style.color = "Green"
                label_vencedor.style.border = "solid black"
            }
        }
    });
}

//define a resposta ao evento de clique no botão Reiniciar
reiniciar.addEventListener('click', (event) =>{
    for(var i = 0; i < 9; i++ ){
        casas[i].value = '_'; //limpa todas as casas
        casas[i].style.color = "white"; //torna o valor _ invisivel
        casas[i].style.backgroundColor = "white"; //torna o fundo branco
    }
    
    label_vencedor.innerHTML = " "
    label_vencedor.style.border = "none"
    label_vencedor.style.color = "red"

    vencedor = '_'; //reseta o vencedor

    sortearJogador(); //escolhe aleatoriamente qual jogador começa
})

//função que decidealeatoriamente o jogador que começa
function sortearJogador() {
    if(Math.floor(Math.random() * 2) == 0){
        jogador = "⭕"; //Define o jogador O como atual
        label_jogador.innerText = "⭕";//exibe na página qual é o jogador atual
        label_jogador.style.color = '#F00';//deixa o texto na cor vermelha
    } else{
        jogador = "❌"; //Define o jogador X como atual
        label_jogador.innerText = "❌";//exibe na página qual é o jogador atual
        label_jogador.style.color = '#00F';//deixa o texto na cor azul
    }
}

sortearJogador();

//Alterna a vez entre os jogadores X ou O
function trocaJogador(){
    if(jogador == "❌"){
        jogador = "⭕";
        label_jogador.innerText = "⭕";
        label_jogador.style.color - '#F00';
    } else {
        jogador = "❌";
        label_jogador.innerText = "❌";
        label_jogador.style.color = '#00F'
    }

};

//Verifica se uma condição de vitória foi atingida e colore a linha da vitória
function vitoria(){
    if((casas[0].value == casas[1].value) && (casas[1].value == casas[2].value) && casas[0].value != '_'){
        casas[0].style.backgroundColor = '#0F0';
        casas[1].style.backgroundColor = '#0F0';
        casas[2].style.backgroundColor = '#0F0';

        return casas[0].value;

    } else if((casas[3].value == casas[4].value) && (casas[4].value == casas[5].value) && casas[3].value !== '_'){
        casas[3].style.backgroundColor = '#0F0';
        casas[4].style.backgroundColor = '#0F0';
        casas[5].style.backgroundColor = '#0F0';

        return casas[3].value;

    } else if((casas[6].value == casas[7].value) && (casas[7].value == casas[8].value) && casas[6].value != '_'){
        casas[6].style.backgroundColor = '#0F0';
        casas[7].style.backgroundColor = '#0F0';
        casas[8].style.backgroundColor = '#0F0';

        return casas[6].value;

    } else if((casas[0].value == casas[3].value) && (casas[3].value == casas[6].value) && casas[0].value != '_'){
        casas[0].style.backgroundColor = '#0F0';
        casas[3].style.backgroundColor = '#0F0';
        casas[6].style.backgroundColor = '#0F0';

        return casas[0].value;

    } else if((casas[1].value == casas[4].value) && (casas[4].value == casas[7].value) && casas[1].value != '_'){
        casas[1].style.backgroundColor = '#0F0';
        casas[4].style.backgroundColor = '#0F0';
        casas[7].style.backgroundColor = '#0F0';

        return casas[1].value;

    } else if((casas[2].value == casas[5].value) && (casas[5].value == casas[8].value) && casas[2].value != '_'){
        casas[2].style.backgroundColor = '#0F0';
        casas[5].style.backgroundColor = '#0F0';
        casas[8].style.backgroundColor = '#0F0';

        return casas[2].value;

    } else if((casas[0].value == casas[4].value) && (casas[4].value == casas[8].value) && casas[0].value != '_'){
        casas[0].style.backgroundColor = '#0F0';
        casas[4].style.backgroundColor = '#0F0';
        casas[8].style.backgroundColor = '#0F0';

        return casas[0].value;

    } else if((casas[2].value == casas[4].value) && (casas[4].value == casas[6].value) && casas[2].value != '_'){
        casas[2].style.backgroundColor = '#0F0';
        casas[4].style.backgroundColor = '#0F0';
        casas[6].style.backgroundColor = '#0F0';

        return casas[2].value;

    } else if(((casas[0].value != casas[1].value) || (casas[1].value != casas[2].value) || (casas[3].value != casas[4].value) || (casas[4].value != casas[5].value) || (casas[6].value != casas[7].value) || (casas[7].value != casas[8].value) || (casas[0].value != casas[3].value) || (casas[3].value != casas[6].value) || (casas[1].value != casas[4].value) || (casas[4].value != casas[7].value) || (casas[2].value != casas[5].value) || (casas[5].value != casas[8].value) || (casas[0].value != casas[4].value) || (casas[4].value != casas[8].value) || (casas[2].value != casas[4].value) || (casas[4].value != casas[6].value)) && (casas[0].value != '_') && (casas[1].value != '_') && (casas[2].value != '_') && (casas[3].value != '_') && (casas[4].value != '_') && (casas[5].value != '_') && (casas[6].value != '_') && (casas[7].value != '_') && (casas[8].value != '_')){

        return label_vencedor.innerHTML = "Deu velha, Ninguém ganhou!"

    } else {
        return '_';
    }

   

};
