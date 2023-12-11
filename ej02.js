// 2. Implemente su propia función find
function miFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }

  return undefined;
}

const numeros = [1, 2, 3, 4, 5];

const numeroMayorQueTres = miFind(numeros, function (elemento) {
  return elemento > 3;
});

console.log(numeroMayorQueTres);
