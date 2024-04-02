// Definição da classe base Animal
class Animal {
    // Construtor da classe com os atributos nome e idade
    constructor(nome, idade) {
        this.nome = nome; // Atributo nome do animal
        this.idade = idade; // Atributo idade do animal
    }

    // Método para exibir informações do animal
    exibirInformacoes() {
        // Retorna uma string com as informações do animal
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
}

// Definição da classe derivada Mamifero, que herda de Animal
class Mamifero extends Animal {
    // Construtor da classe com os atributos nome, idade e tipo de pelo
    constructor(nome, idade, tipoDePelo) {
        super(nome, idade); // Chamada ao construtor da classe base
        this.tipoDePelo = tipoDePelo; // Atributo tipo de pelo do mamífero
    }

    // Método para emitir som característico do mamífero
    emitirSom() {
        return "O mamífero está emitindo um som característico.";
    }
}

// Definição da classe derivada Ave, que herda de Animal
class Ave extends Animal {
    // Construtor da classe com os atributos nome, idade e tipo de bico
    constructor(nome, idade, tipoDeBico) {
        super(nome, idade); // Chamada ao construtor da classe base
        this.tipoDeBico = tipoDeBico; // Atributo tipo de bico da ave
    }

    // Método para verificar se a ave pode voar
    podeVoar() {
        // Retorna true se a ave puder voar, caso contrário retorna false
        return this.tipoDeBico !== "curvo"; // Exemplo simples de condição para voar
    }
}

// Criando uma instância da classe Mamifero
const mamifero1 = new Mamifero("Leão", 5, "Pelagem");

// Exibindo informações do mamífero e seu som característico
console.log("Informações do Mamífero:", mamifero1.exibirInformacoes());
console.log(mamifero1.emitirSom());

// Criando uma instância da classe Ave
const ave1 = new Ave("Papagaio", 2, "Curvo");

// Exibindo informações da ave e se ela pode voar
console.log("\nInformações da Ave:", ave1.exibirInformacoes());
console.log(`Pode voar? ${ave1.podeVoar() ? "Sim" : "Não"}`);
