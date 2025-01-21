class heroi {
    constructor (nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    if(tipo = "Guerreiro"){
        ataque = "usou espada"
    }
    atacar(){
        console.log(`${this.nome} atacou ${this.ataque}`)
    }
}

let meuHeroi = new heroi("Cogumelo", 25, "Guerreiro")

meuHeroi.atacar()
