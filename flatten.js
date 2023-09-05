const arr2 = [[1, [2, 3, [4, [5]], 6, [7, [8]]]]];

const flattenNumbers = [];

function flatten(arr) {
  arr.forEach((numberOrArray) => {
    if (!Array.isArray(numberOrArray)) {
      flattenNumbers.push(numberOrArray);
      return;
    }

    flatten(numberOrArray);
  });

  return flattenNumbers;
}

console.log(flatten(arr2)); // [1, 2, 3, 4, 5, 6, 7, 8]
