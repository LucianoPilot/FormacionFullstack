/*Crear una clase que represente una pila (LIFO). Dicha clase debe tener los siguientes métodos:
• Agregar elementos a la pila push
• Sacar elementos de la pila pop
• Consultar la cantidad de elementos size
Además:
1 Diseñar la clase de forma tal que se puedan crear pilas para tipos concretos, ej: boolean,
string, number, o cualquier otro tipo. Pero que solo permita dichos tipos.
2 Crear una nueva clase que no permita el agregado de elementos repetidos.*/

class Pila<T> {
  public elementos: T[];

  constructor() {
    this.elementos = [];
  }

  push(elemento: T): void {
    this.elementos.push(elemento);
  }

  pop(): T | undefined {
    return this.elementos.pop();
  }

  size(): number {
    return this.elementos.length;
  }
}

const pilaNumeros = new Pila<number>();
pilaNumeros.push(10);
pilaNumeros.push(20);
pilaNumeros.push(30);
console.log("Pila de números:", pilaNumeros);

const pilaStrings = new Pila<string>();
pilaStrings.push("Pizza");
pilaStrings.push("Tower");
console.log("Pila de strings:", pilaStrings);

class PilaSinRepetidos<T> extends Pila<T> {
  push(elemento: T): void {
    if (!this.elementos.includes(elemento)) {
      super.push(elemento);
    }
  }
}

const pilaSinRepetidos = new PilaSinRepetidos<number>();
pilaSinRepetidos.push(10);
pilaSinRepetidos.push(20);
pilaSinRepetidos.push(10);
console.log("Pila sin elementos repetidos:", pilaSinRepetidos);
