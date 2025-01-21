class heroi {
    constructor (nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo // Guerreiro, Mago, Ninja e Monge
        this.ataque = ataque // espada, magia, shuriken e artes marciais
    }
    atacar(){
        console.log(`O ${this.nome} atacou usando ${ataque}`)
    }
    status(){
        console.log(`O seu nome é ${this.nome}, possui ${this.idade} anos e é da classe ${this.tipo}`)
    }
}

let meuHeroi = new heroi("Cogumelo", 25, "Guerreiro", "espada")

meuHeroi.atacar()
meuHeroi.status()