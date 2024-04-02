// Definição da classe Calculadora
class Calculadora {
    // Método privado para calcular raiz quadrada de um número
    #raizQuadrada(numero) {
        return Math.sqrt(numero);
    }

    // Método privado para calcular potência de um número
    #potencia(base, expoente) {
        return Math.pow(base, expoente);
    }

    // Método privado para somar dois números
    #somar(a, b) {
        return a + b;
    }

    // Método privado para subtrair dois números
    #subtrair(a, b) {
        return a - b;
    }

    // Método privado para multiplicar dois números
    #multiplicar(a, b) {
        return a * b;
    }

    // Método privado para dividir dois números
    #dividir(a, b) {
        if (b === 0) {
            return "Não é possível dividir por zero.";
        }
        return a / b;
    }

    // Método público para calcular raiz quadrada
    calcularRaizQuadrada(numero) {
        return this.#raizQuadrada(numero);
    }

    // Método público para calcular potência
    calcularPotencia(base, expoente) {
        return this.#potencia(base, expoente);
    }

    // Método público para somar
    somar(a, b) {
        return this.#somar(a, b);
    }

    // Método público para subtrair
    subtrair(a, b) {
        return this.#subtrair(a, b);
    }

    // Método público para multiplicar
    multiplicar(a, b) {
        return this.#multiplicar(a, b);
    }

    // Método público para dividir
    dividir(a, b) {
        return this.#dividir(a, b);
    }
}

// Criando uma instância da classe Calculadora
const calculadora = new Calculadora();

// Realizando diversas operações matemáticas
console.log("Raiz quadrada de 16:", calculadora.calcularRaizQuadrada(16));
console.log("Potência de 2 elevado a 3:", calculadora.calcularPotencia(2, 3));
console.log("Soma de 5 e 3:", calculadora.somar(5, 3));
console.log("Subtração de 7 por 4:", calculadora.subtrair(7, 4));
console.log("Multiplicação de 6 por 2:", calculadora.multiplicar(6, 2));
console.log("Divisão de 10 por 2:", calculadora.dividir(10, 2));
