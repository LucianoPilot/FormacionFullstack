/*5. Queremos realizar cálculos usando funciones y obtener los resultados. Los requerimientos
son:
• Debe haber una función para cada número del 0 (”cero”) al 9 (”nueve”)
• Debe haber una función para cada una de las siguientes operaciones matemáticas:
suma, resta, multiplicación y división
• Cada cálculo consta exactamente de una operación y dos argumentos (números)
• La función externa representa el operando izquierdo, la función interna representa el
operando derecho
• La división debe ser una división entera. Por ejemplo, el resultado debería ser 2 y no
2.666666...
seven(times(five())); // debe devolver 35
four(plus(nine())); // debe devolver 13
eight(minus(three())); // debe devolver 5
six(dividedBy(two())); // debe devolver 3 */

function cero(callback) {
  if (!callback) return 0;
  else return callback(0);
}
function one(callback) {
  if (!callback) return 1;
  else return callback(1);
}
function two(callback) {
  if (!callback) return 2;
  else return callback(2);
}
function three(callback) {
  if (!callback) return 3;
  else return callback(3);
}
function four(callback) {
  if (!callback) return 4;
  else return callback(4);
}
function five(callback) {
  if (!callback) return 5;
  else return callback(5);
}
function six(callback) {
  if (!callback) return 6;
  else return callback(6);
}
function seven(callback) {
  if (!callback) return 7;
  else return callback(7);
}
function eight(callback) {
  if (!callback) return 8;
  else return callback(8);
}
function nine(callback) {
  if (!callback) return 9;
  else return callback(9);
}

function plus(b) {
  return function (a) {
    return a + b;
  };
}
function minus(b) {
  return function (a) {
    return a - b;
  };
}
function times(b) {
  return function (a) {
    return a * b;
  };
}
function dividedBy(b) {
  return function (a) {
    return Math.floor(a / b);
  };
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
console.log(five(dividedBy(three())));
