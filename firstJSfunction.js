function orderWeight(string) {
  let arr = string.split(' ').filter(x => x !== '').sort();
  let per = {}
  function numWeight (num) {
    let numArr = num.split('');
    for (let j = 0; j < numArr.length; j++) {
      numArr[j] = Number(numArr[j]);
    };
    
    return numArr.reduce((sum, current) => {
      return sum + current;
    }, 0)
  }
  let sortedArr = arr.sort((a, b) => {
    return numWeight(a) - numWeight(b);
  });
  return sortedArr.join(' ')
}



console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'))

console.log('Привет мир!')

