let numbers = [58, 54, 95, 78, 46, 35];
//let number2 = number.filter((n) => n >= 80);
let numbers2 = myfilter(numbers);
console.log(numbers2);

function myfilter(numbers) {
  let newnumber = [];
  for (const number of numbers) {
    if (number >= 80) {
      newnumber.push(number);
    }
  }
  return newnumber;
}
