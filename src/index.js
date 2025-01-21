class heroi {
    constructor (nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
    atacar(ataque){
        if(tipo == "Guerreiro"){
            ataque = "usando espada"
        }else if (tipo == "Mago"){
            ataque = "usando magia"
        }else if (tipo == monge){
            ataque = "usando artes marciais"
        }else if (tipo == ninja){
            ataque = "usando shuriken"
        }
    }
}

let meuHeroi = new heroi("Cogumelo", 25, "Guerreiro")
console.log(`${meuHeroi.nome} atacou ${ataque}`)