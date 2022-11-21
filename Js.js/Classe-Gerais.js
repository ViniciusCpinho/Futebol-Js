
class Time{

    constructor(nome, fundacao, nomeTecnico, listaDeJogadores, listaDeJogadoresRelacionados, numJogadores) {
        this.nome = nome;
        this.fundacao = fundacao;
        this.listaDeJogadores = listaDeJogadores;
        this.listaDeJogadoresRelacionados = listaDeJogadoresRelacionados;
        this.nomeTecnico = nomeTecnico;
        this.numJogadores = numJogadores;
    }
}

class Jogo{

    constructor(dataDoJogo, estadio, cidade, timeMandante, timeVisitante, nomeJuiz, listaDeCartões, listaDeGol) {
        this.dataDoJogo = dataDoJogo;
        this.estadio = estadio;
        this.cidade = cidade;
        this.timeMandante = timeMandante;
        this.timeVisitante = timeVisitante;
        this.nomeJuiz = nomeJuiz;
        this.listaDeCartões = listaDeCartões;
        this.listaDeGol = listaDeGol;

    }
}


