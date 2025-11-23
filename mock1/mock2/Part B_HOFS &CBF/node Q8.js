let nums = [10, 3, 7, 20, 13, 2];
//map-creating new array
let squares=nums.map(num=>num*num);
console.log(squares);

//filter-prime numbers
let primes=nums.filter(num=>{
    if(num%2==1){
        return nums;
    }
})
console.log("primes",primes);

//reduce-sum of all elements
let sum=nums.reduce((acc,num)=>acc+num,0);
console.log(sum);

//sort-descending order
let desc=[...nums].sort((a,b)=>b-a);
console.log(desc);