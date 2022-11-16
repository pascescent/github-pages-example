let recipe = {flour: 500, sugar: 200, eggs: 1};
let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

let portions = [];

for (let key in recipe) {
  if (available[key] / recipe[key] > 0) {
    portions.push(Math.floor(available[key] / recipe[key]));
  } else {
    portions.push(0)
  }
  
}

console.log(portions)

let count = 1;
let min = portions[0];

while (count < portions.length) {
  if(portions[count] < min) {
    min = portions[count]
    count = 1;
  }
  count++;
}

console.log(min)