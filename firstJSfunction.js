
function solution(number){
  let romNumber = '';
  let nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let letters = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let count = nums.length - 1;

  while (number > 0) {
    if (number >= nums[count]) {
      romNumber += letters[count];
      number -= nums[count];
    } else {
      count--;
    }
    
  }


  return romNumber;
}

console.log(solution(1001))
