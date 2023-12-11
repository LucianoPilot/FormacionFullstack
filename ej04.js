// 4. Implemente su propia función reduce
function miReduce(arr, callback, valorInicial) {
  let acumulador = valorInicial !== undefined ? valorInicial : arr[0];

  const startIndex = valorInicial !== undefined ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    acumulador = callback(acumulador, arr[i], i, arr);
  }

  return acumulador;
}

const numeros = [1, 2, 3, 4, 5];

const suma = miReduce(
  numeros,
  function (acumulador, elemento) {
    return acumulador + elemento;
  },
  0
);

console.log(suma);
