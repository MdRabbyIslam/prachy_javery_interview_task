let arrayA = [1, 3, 5, 8];

let arrayB = [0, 2, 10];

function merge(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let k = i + j + 1;

  while (k >= 0) {
    if (a[i] > b[j] || j < 0) {
      a[k] = a[i];
      i--;
    } else {
      a[k] = b[j];
      j--;
    }
    k--;
  }
  return a;
}

console.log(merge(arrayA, arrayB));
