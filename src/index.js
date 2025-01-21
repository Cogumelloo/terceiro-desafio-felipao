class heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}

let meuHeroi = new heroi("Cogumelo", 25, "Guerreiro")
console.log(`${meuHeroi.nome} atacou usando`)