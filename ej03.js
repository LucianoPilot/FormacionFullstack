// 3. Implemente su propia función filter
function miFilter(arr, callback) {
  const resultado = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      resultado.push(arr[i]);
    }
  }

  return resultado;
}

const numeros = [1, 2, 3, 4, 5, 6];

const numerosPares = miFilter(numeros, function (elemento) {
  return elemento % 2 === 0;
});

console.log(numerosPares);
