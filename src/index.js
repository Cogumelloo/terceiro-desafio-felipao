class heroi {
    constructor (nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo["Guerreiro", "Mago", "Ninja", "Monge"] // Guerreiro, Mago, Ninja e Monge
        this.ataque = ataque // espada, magia, shuriken e artes marciais
    }
    if(tipo = "Guerreiro"){
        ataque = "espada"
    }
    atacar(){
        console.log(`${this.nome} atacou usando ${ataque}`)
    }
}

let meuHeroi = new heroi("Cogumelo", 25, this.tipo[1])