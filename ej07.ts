/*1 Crear una clase para representar a las figuras geométricas, que permita calcular el perimetro
y el area
2 Crear una clase que represente a los cuadrados.
3 Crear una clase que represente a los círculos.
4 Aplicando polimorfismo, muestre un ejemplo utilizando las clases anteriores.*/

abstract class FiguraGeometrica {
  abstract calcularArea(): number;
  abstract calcularPerimetro(): number;
}

class Cuadrado extends FiguraGeometrica {
  private lado: number;

  constructor(lado: number) {
    super();
    this.lado = lado;
  }

  calcularArea(): number {
    return this.lado * this.lado;
  }

  calcularPerimetro(): number {
    return 4 * this.lado;
  }
}

class Circulo extends FiguraGeometrica {
  private radio: number;
  private readonly PI: number = Math.PI;

  constructor(radio: number) {
    super();
    this.radio = radio;
  }

  calcularArea(): number {
    return this.PI * this.radio * this.radio;
  }

  calcularPerimetro(): number {
    return 2 * this.PI * this.radio;
  }
}

// Ejemplo de Polimorfismo

function mostrarInformacion(figura: FiguraGeometrica) {
  console.log("Área:", figura.calcularArea());
  console.log("Perímetro:", figura.calcularPerimetro());
}

const miCuadrado = new Cuadrado(5);

const miCirculo = new Circulo(3);

console.log("Cuadrado:");
mostrarInformacion(miCuadrado);

console.log("\nCírculo:");
mostrarInformacion(miCirculo);
