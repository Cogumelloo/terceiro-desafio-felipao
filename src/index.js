class heroi {
    constructor (nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        if(this.tipo === "Guerreiro"){
            ataque = "usou espada"
        }
    }
}

let meuHeroi = new heroi("Cogumelo", 25, "Guerreiro")
meuHeroi.atacar()
console.log(`${meuHeroi.nome} atacou ${this.ataque}`)