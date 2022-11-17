let number = 7

let count = 0;

while (number > 0) {
    if (number / 2 % 1 !== 0) {
        count++;
        number = (number - 1) / 2;
    } else {
        number /= 2;
    }

}


console.log(count)
