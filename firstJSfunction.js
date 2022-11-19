/*
let validSolution = function (board) {

}

let arr = [5, 3, 4, 6, 7, 8, 9, 1, 2];


validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]);

*/


let lineCheck = function (arr) {
    let numbs = arr.reduce((acc, key) => {
        if (!acc[key]) {
            acc[key] = 0;
        }
        acc[key]++;
        return acc
    }, {})

    let count = 0;
    
    for (let i in numbs) {
        if (numbs[i] === 1) {
            count++;
        }
    }
    return count === 9;

}


console.log(lineCheck([5, 3, 4, 6, 7, 8, 9, 1, 2]))


