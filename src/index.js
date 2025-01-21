class heroi {
    constructor (nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    ataque(){
        let ataque = ""
        if(tipo === "Guerreiro"){
            ataque = "usando espada"
        }
    }
}

let meuHeroi = new heroi("Cogumelo", 25, "Guerreiro")
console.log(`${meuHeroi.nome} atacou ${heroi.ataque}`)