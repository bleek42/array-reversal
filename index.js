const input = [2, 4, 7, 0];

function arrayReversal(arr) {
  const revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
}

console.log(arrayReversal(input));

function lazyReversal(arr) {
  return arr.reverse();
}

console.log(lazyReversal(input));