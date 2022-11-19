let parens = '(())(())(()(()()()(())))'

let arr = parens.split('')

let i = 0

while (arr.length > 1) {
    if (arr[0] === ')' || !arr.includes(')')) {
        break
    } 
    arr.splice(0, 1);
    arr.splice(arr.indexOf(')'), 1);
}



console.log(!arr.join(''))



