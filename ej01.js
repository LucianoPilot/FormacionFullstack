//1. Implemente su propia función map
function miMap(arr, callback) {
  const resultado = [];

  for (let i = 0; i < arr.length; i++) {
    resultado.push(callback(arr[i], i, arr));
  }

  return resultado;
}

const numeros = [1, 2, 3, 4, 5];

const numerosDuplicados = miMap(numeros, function (elemento) {
  return elemento * 2;
});

console.log(numerosDuplicados);
