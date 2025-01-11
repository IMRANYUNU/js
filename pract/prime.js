let n = 13
let prime = true 
for(let i=2; i<=n; i++){
    if(n%i==0) {
        prime=false;
        break;


    }
}
if(prime == true){
    console.log (`${n} is a prime`)
}
else{
    console.log (`${n}is not a prime`);
}