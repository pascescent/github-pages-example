function arrayDiff(a, b) {
  let newArr = [];
    newArr = b.reduce((arr, exept) => {
      return arr.filter(e => e !== exept)
    }, a);
  return newArr;
}

console.log(arrayDiff([1, 2, 3, 4, 5, 2, 4], [2, 3]))