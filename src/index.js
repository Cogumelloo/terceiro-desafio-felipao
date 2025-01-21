class heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    if(tipo = "Guerreiro"){
        ataque = "usou espada"
    }
    atacar(){
        console.log(`${this.nome} atacou ${ataque}`)
    }
}

let meuHeroi = new heroi("Cogumelo", 25, "Guerreiro")

meuHeroi.atacar()
