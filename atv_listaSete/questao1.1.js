class Carro {
    // Construtor da classe com os atributos marca, modelo e ano
    constructor(marca, modelo, ano) {
        this.marca = marca; 
        this.modelo = modelo; 
        this.ano = ano; 
    }

    // Método para obter informações formatadas do carro
    obterInformacoes() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }

    // Método para calcular e retornar a idade do carro
    idadeDoCarro() {
        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - this.ano;
        return idade;
    }
}


const meuCarro = new Carro("Toyota", "Corolla", 2018);

console.log("Informações do Carro:", meuCarro.obterInformacoes());
console.log("Idade do Carro:", meuCarro.idadeDoCarro(), "anos.");
