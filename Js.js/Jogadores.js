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
        this.suspenso= true;
        this.cartoesAmarelo = 0;
        this.cartoesVermelho = 0;
}

    CartaoAmarelo(){
        this.cartoesAmarelo = this.cartoesAmarelo + 1;

        if(this.cartoesAmarelo = 2){
            suspencao()
        }
    }

    CartaoVermelho(){
        this.cartoesVermelho = this.cartoesVermelho  + 1;
        suspencao()
    }
}


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
    for(let i = 0; i < 10; i++){
        var a = Math.round(Math.random() * 45)
    
        listaDeJogadores[a].suspencao()
    }
}

function aleatorizarCartoesAmarelo(){
    for(let i = 0; i < 15; i++){
        a = Math.round(Math.random() * 45)
        
        listaDeJogadores[a].CartaoAmarelo()
    }
}

function aleatorizarCartoesVemelho(){
    for(let i = 0; i < 15; i++){
        a = Math.round(Math.random() * 45)
        
        listaDeJogadores[a].CartaoVermelho()
    }
}

function aptidao(num){
    if(listaDeJogadores[num].suspenso == false){
       listaDeJogadores[num].entraEmCampo = true;
    }
}
