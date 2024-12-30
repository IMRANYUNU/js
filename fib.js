// fibonnic
let first =1;
let second =1;
let sum =0;
console.log("Fibonacci Program");
console.log(first);
console.log(second);

for(let i=1; i<=9;i++){
    sum = first + second;
    console.log(sum);
    first=second;
    second=sum;
}