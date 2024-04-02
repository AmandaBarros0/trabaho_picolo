// Definição da classe base Livro
class Livro {
    // Construtor da classe com os atributos título, autor e preço
    constructor(titulo, autor, preco) {
        this.titulo = titulo; // Atributo título do livro
        this.autor = autor; // Atributo autor do livro
        this.preco = preco; // Atributo preço do livro
    }

    // Método para exibir informações do livro
    exibirInformacoes() {
        // Retorna uma string com as informações do livro
        return `Título: ${this.titulo}, Autor: ${this.autor}, Preço: R$ ${this.preco.toFixed(2)}`;
    }
}

// Definição da classe derivada LivroFisico, que herda de Livro
class LivroFisico extends Livro {
    // Construtor da classe com os atributos título, autor, preço e peso
    constructor(titulo, autor, preco, peso) {
        super(titulo, autor, preco); // Chamada ao construtor da classe base
        this.peso = peso; // Atributo peso do livro físico
    }

    // Método para calcular o custo de envio com base no peso
    calcularCustoEnvio() {
        // Simulação simples de cálculo de custo de envio
        // Neste exemplo, consideramos que o custo é proporcional ao peso
        return this.peso * 0.1; // Supondo que o custo seja R$ 0.10 por grama
    }
}

// Definição da classe derivada Ebook, que herda de Livro
class Ebook extends Livro {
    // Construtor da classe com os atributos título, autor, preço e tamanho em MB
    constructor(titulo, autor, preco, tamanhoMB) {
        super(titulo, autor, preco); // Chamada ao construtor da classe base
        this.tamanhoMB = tamanhoMB; // Atributo tamanho em MB do ebook
    }

    // Método para verificar o tamanho do ebook
    verificarTamanhoEbook() {
        if (this.tamanhoMB < 10) {
            return "Pequeno";
        } else if (this.tamanhoMB < 50) {
            return "Médio";
        } else {
            return "Grande";
        }
    }
}

// Criando instâncias das classes e definindo atributos
const livro1 = new Livro("Dom Quixote", "Miguel de Cervantes", 29.99);
const livroFisico1 = new LivroFisico("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 39.99, 1000);
const ebook1 = new Ebook("A Arte da Guerra", "Sun Tzu", 9.99, 5);

// Demonstrando a herança e os métodos das classes
console.log("Informações do Livro:", livro1.exibirInformacoes());

console.log("\nInformações do Livro Físico:");
console.log(livroFisico1.exibirInformacoes());
console.log("Custo de envio: R$", livroFisico1.calcularCustoEnvio().toFixed(2));

console.log("\nInformações do Ebook:");
console.log(ebook1.exibirInformacoes());
console.log("Tamanho do Ebook:", ebook1.verificarTamanhoEbook());
