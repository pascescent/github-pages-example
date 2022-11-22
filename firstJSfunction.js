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
let board = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]];

let lineCheck = function (arr) {
    let numbs = arr.reduce((acc, key) => {
        if (!acc[key] && key !== 0 && key <= 9) {
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

let verticalLine = function (arrs, row) {
    let line = arrs.map(arr => arr[row])
    return line
}

let cubeLine = function (arrs, box) {
    let cube = arrs.slice(0)
    let result;
    if (box >= 0 && box < 3) {
        cube.splice(3);
    } else if (box >= 3 && box < 6) {
        cube = cube.slice(3, 6);
    } else if (box >=6 && box < 9) {
        cube.splice(0, 6);
    }


    
    if (box === 0 || box === 3 || box === 6) {
        result = cube.map(arr => arr.slice(0, 3));
    } else if (box === 1 || box === 4 || box === 7) {
        result = cube.map(arr => arr.slice(3, 6));

    } else if (box === 2 || box === 5 || box === 8) {
        result = cube.map(arr => arr.slice(6))
    }


    return result.reduce((r, arr) => {
        return r.concat(arr)
    }, [])
}

let total = 0;

for (let i = 0; i < board.length; i++) {
    if (lineCheck(board[i]) && lineCheck(verticalLine(board, i)) && lineCheck(cubeLine(board, i))) {
        total++;
    }
}

console.log(total === 9)









