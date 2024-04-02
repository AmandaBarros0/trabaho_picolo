// Definição da classe Membro
class Membro {
    // Construtor da classe com os atributos nome, idade, peso e altura
    constructor(nome, idade, peso, altura) {
        this.nome = nome; // Atributo nome do membro
        this.idade = idade; // Atributo idade do membro
        this.peso = peso; // Atributo peso do membro
        this.altura = altura; // Atributo altura do membro
    }

    // Método para verificar se o membro é menor de idade
    ehMenorDeIdade() {
        // Retorna true se a idade for menor que 18, caso contrário retorna false
        return this.idade < 18;
    }

    // Método para calcular o índice de massa corporal (IMC)
    calcularIMC() {
        // Calcula o IMC usando a fórmula: peso / (altura * altura)
        const imc = this.peso / (this.altura * this.altura);
        return imc;
    }

    // Método para acompanhar o progresso do membro
    acompanharProgresso() {
        // Exibe uma mensagem com o nome do membro e seu IMC
        console.log(`Nome: ${this.nome}, IMC: ${this.calcularIMC().toFixed(2)}`);
    }
}

// Criando uma instância da classe Membro
const membro1 = new Membro("Amanda", 10, 75, 1.75);

// Verificando se o membro é menor de idade e exibindo a mensagem correspondente
if (membro1.ehMenorDeIdade()) {
    console.log(`${membro1.nome} é menor de idade e tem direito ao desconto especial.`);
} else {
    console.log(`${membro1.nome} é maior de idade.`);
}

// Exibindo o IMC do membro
console.log(`${membro1.nome} tem um IMC de ${membro1.calcularIMC().toFixed(2)}.`);

// Acompanhando o progresso do membro
membro1.acompanharProgresso();
