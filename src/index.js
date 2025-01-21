class heroi {
    constructor (nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
    atacar(){
        if(tipo === "Guerreiro"){
            this.ataque = "usando espada"
        }
    }
}

let meuHeroi = new heroi("Cogumelo", 25, "Guerreiro")
console.log(`${meuHeroi.nome} atacou ${this.ataque}`)