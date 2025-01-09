let first = 1;
let second = 2;
let sum = 0;
console.log(first);
console.log(second);
for (let i = 1; i <= 6; i++) {
  sum = first + second;
  console.log(sum);
  first = second;
  second = sum;
}
