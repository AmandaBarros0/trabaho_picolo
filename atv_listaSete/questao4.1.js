// Definição da classe abstrata ItemBiblioteca
class ItemBiblioteca {
    // Método abstrato para obter informações
    obterInformacoes() {
        throw new Error("Método abstrato 'obterInformacoes' deve ser implementado.");
    }
}

// Definição da classe derivada Livro, que herda de ItemBiblioteca
class Livro extends ItemBiblioteca {
    constructor(titulo, autor, anoPublicacao) {
        super();
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    // Implementação do método obterInformacoes para Livro
    obterInformacoes() {
        return `Livro: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
    }
}

// Definição da classe derivada DVD, que herda de ItemBiblioteca
class DVD extends ItemBiblioteca {
    constructor(titulo, diretor, duracao) {
        super();
        this.titulo = titulo;
        this.diretor = diretor;
        this.duracao = duracao;
    }

    // Implementação do método obterInformacoes para DVD
    obterInformacoes() {
        return `DVD: ${this.titulo}, Diretor: ${this.diretor}, Duração: ${this.duracao} minutos`;
    }
}

// Criando instâncias das classes Livro e DVD
const livro = new Livro("Dom Quixote", "Miguel de Cervantes", 1605);
const dvd = new DVD("O Senhor dos Anéis: A Sociedade do Anel", "Peter Jackson", 178);

// Chamando o método obterInformacoes para exibir detalhes sobre o item da biblioteca
console.log(livro.obterInformacoes());
console.log(dvd.obterInformacoes());
