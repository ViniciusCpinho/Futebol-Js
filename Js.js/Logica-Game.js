class Jogadores{

    constructor(nome, numero, posicao, time, entraEmCampo){
        this.nome = nome;
        this.numero = numero;
        this.posicao = posicao;
        this.cartoesAmarelo = 0;
        this.cartoesVermelho = 0;
        this.suspenso = false;
        this.time = time;
        this.entraEmCampo = false;
    }

    suspencao(){
        this.suspenso = true;
        this.cartoesAmarelo = 0;
        this.cartoesVermelho = 0;
    }

    suspencaoEmCampo(){
        this.suspenso = true;
        
    }

    CartaoAmarelo(){
        this.cartoesAmarelo = this.cartoesAmarelo + 1;
        
        if(this.cartoesAmarelo == 2){
            this.suspencao()
        }
    }

    CartaoVermelho(){
        this.cartoesVermelho = this.cartoesVermelho  + 1;
        this.suspencao()
    }
}

/*---------------------------------------------------------------------------------------------*/

class Campeoneto{
    constructor(nome, listaDeJogoCampeonato){
        this.nome = nome;
        this.listaDeJogoCampeonato = listaDeJogoCampeonato;
    }
}


/*---------------------------------------------------------------------------------------------*/

class Time{

    constructor(nome, fundacao, listaDeJogadores, listaDeJogadoresRelacionados, numJogadores, nomeTecnico) {
        this.nome = nome;
        this.fundacao = fundacao;
        this.listaDeJogadores = listaDeJogadores;
        this.listaDeJogadoresRelacionados = listaDeJogadoresRelacionados;
        this.numJogadores = numJogadores;
        this.nomeTecnico = nomeTecnico;
    }
}


/*---------------------------------------------------------------------------------------------*/

class Jogo{

    constructor(dataDoJogo, estadio, timeMandante, timeVisitante, nomeJuiz, listaDeCartões, listaDeGol, placarTimeMandante, placarTimeVisitante
        ) {
        this.dataDoJogo = dataDoJogo;
        this.estadio = estadio;
        this.timeMandante = timeMandante;
        this.timeVisitante = timeVisitante;
        this.placarTimeMandante = placarTimeMandante;
        this.placarTimeVisitante = placarTimeVisitante;
        this.nomeJuiz = nomeJuiz;
        this.listaDeCartões = listaDeCartões;
        this.listaDeGol = listaDeGol;
    }

    EscolhaEstadio(Escolhido){
        this.estadio = Escolhido;   
        document.write(Escolhido)
    }


}


/*---------------------------------------------------------------------------------------------*/




/* Funções para jogadores*/

var listaDeJogadores = [
    new Jogadores("Bebeto", "7", "Atacante"),
    new Jogadores("Ronaldo", "18","Atacante"),
    new Jogadores("Juninho", "9", "Atacante"),
    new Jogadores("Amaral", "8", "Meia"),
    new Jogadores("Conceição", "5", "Meia"),
    new Jogadores("R. Carlos", "6", "Lateral"),
    new Jogadores("Zé Elias", "15", "Meia"),
    new Jogadores("Zé Maria", "2", "Lateral"),
    new Jogadores("Aldir", "3", "Zagueiro"),
    new Jogadores("R.Guiaro", "4", "Zagueiro"),
    new Jogadores("Dida", "1", "Goleiro"),
    new Jogadores("Neymar", "10", "Ponta"),
    new Jogadores("Fred", "2", "Atacante"),
    new Jogadores("Hulk", "3", "Atacante"),
    new Jogadores("Oscar", "11", "Meia"),
    new Jogadores("L. Gustavo", "23", "Meia"),
    new Jogadores("Paulinho", "4", "Meia"),
    new Jogadores("Marcelo", "5", "Zagueiro"),
    new Jogadores("David Luiz", "12", "Zagueiro"),
    new Jogadores("T. Silva", "13", "Zagueiro"),
    new Jogadores("Daniel Alves", "15", "Zagueiro"),
    new Jogadores("Julio Cesar", "16", "Goleiro"),
    new Jogadores("Ronaldinho", "99", "Atacante"),
    new Jogadores("Fenomeno", "77", "Atacante"),
    new Jogadores("Castilho", "98", "Goleiro"),
    new Jogadores("Bellini", "97", "Zagueiro"),
    new Jogadores("Gilmar", "96", "Goleiro"),
    new Jogadores("Djilma", "95", "Lateral"),
    new Jogadores("Dino", "94", "Meia"),
    new Jogadores("Didi", "93", "Meia"),
    new Jogadores("Zagallo", "92", "Atacante"),
    new Jogadores("Oreco", "91", "Meia"),
    new Jogadores("Zózimo", "90", "Zagueiro"),
    new Jogadores("Pelé", "100", "Atacante"),
    new Jogadores("Garrincha", "89", "Atacante"),
    new Jogadores("Nilson Santos", "88", "Lateral"),
    new Jogadores("Moacir", "87", "Zagueiro"),
    new Jogadores("De Sordi", "86", "Lateral"),
    new Jogadores("Orlando", "85", "Zaqueiro"),
    new Jogadores("Mauro", "84", "Lateral"),
    new Jogadores("Joel", "83", "Atacante"),
    new Jogadores("Mazzola", "82", "Atacante"),
    new Jogadores("Zito", "81", "Meia"),
    new Jogadores("Vavá", "80", "Atacante"),
    new Jogadores("Pepe", "79", "Atacante"),
    new Jogadores("Kaká", "78", "Meia"),
    new Jogadores("Fenomeno", "77", "Atacante")]
    
    function aletoriazarSuspensoes(){
        for(let i = 0; i < 3; i++){
            var a = Math.round(Math.random() * 45)
            listaDeJogadores[a].suspencao()
            //console.log(listaDeJogadores[a])
            
        }
    }
    
    function aleatorizarCartoesAmarelo(){
        for(let i = 0; i < 15; i++){
            a = Math.round(Math.random() * 45)
            listaDeJogadores[a].CartaoAmarelo()
            listaDeJogadores.slice(a, 1)
            //console.log(listaDeJogadores[a])
        }
    }
    
    function aleatorizarCartoesVemelho(){
        for(let i = 0; i < 3; i++){
            a = Math.round(Math.random() * 45)
            listaDeJogadores.slice(a, 1)
            listaDeJogadores[a].CartaoVermelho()
            //console.log(listaDeJogadores[a])
        }
    }


    var listaDeJogadoresEmCampo = []
    
    function aptidao(){
        for(let i = 0; i < listaDeJogadores.length; i++)
        {
            if(listaDeJogadores[i].suspenso == false){
                listaDeJogadoresEmCampo.push(listaDeJogadores[i]);
            }
        }
    }
    

 /*Fim de função para jogadores*/
   
 
 /* Funções Jogo*/
var listaDeEstadio = [
    'Maracanã', 'Mané Garrincha', 'Morumbi', 'Castelão', 'Estadio Do Flamengo'
]
    
var data = ""
var aleEstadio = 0;

function aleatorizandoData(){
        dia = Math.round((Math.random() *30) + 1)
        mes = Math.round((Math.random()  * 11) +1)
        ano = Math.round(Math.random() *22)    
    
    return data = (dia + "/" + mes + "/" + ano)
}

function aleatorizandoEstadio(){
    return aleEstadio =  Math.round(Math.random() * 4)    
}


function Placar(){
    for(let i = 0; i < listaDeTimes.length; i++){
        let a = Math.round(Math.random() *3)
        let b = Math.round(Math.random() *3)
        
        return a, b;
    }
    
}

var Juizes = ["Ladrinho", "Luiz Engana Velho", "Gabi Gordo", "Calvo Mandioca"]

function TotalCartões(){
    
}

/* Fim função de Jogo */

/* Função de Time */

function pegarTime(time){
    a = Math.round(Math.random() * 4)
    time = listaDeTimes[a];
    listaDeTimes[a].slice(a, 1)
    return time;
}

var listaDeTecnicos = [
"Jamelão Ladrão", "Jair Perna Seca", "Mario que...", "Gabriel o Romantico", "Aucir Valente"
]

var listaDeTimes = [
    new Time("Varmengo", "17 de novembro de 1895"),
    new Time("Vasco Da Grama", "21 de agosto de 1898"),
    new Time("Farinthians", "1 de setembro de 1910"),
    new Time("PALmeiras", "26 de agosto de 1914")
]

/* Fim função de Times*/




/* ----------------------------------------- Inicio de Chamada de Função e Classes ---------------------------------*/

var Time1 = "";
var Time2 = "";


aletoriazarSuspensoes();
aleatorizarCartoesAmarelo();
aleatorizarCartoesVemelho();



aptidao()

var Time1 = pegarTime();
var Time2 = pegarTime();

console.log(Time1)
console.log(Time2)







