
//https://www.youtube.com/watch?v=BwyFLRVYbvU

const data=[10,2,4,10];
// Step1 Start
// const calculat_square=function(data){
//     const output=[];
//     for(i=0;i<data.length;i++){
//         output.push(data[i]*2);
//     }
//     return output;
// }
// const calculat_AddOne=function(data){
//     const output=[];
//     for(i=0;i<data.length;i++){
//         output.push(data[i]+1);
//     }
//     return output;
// }
// console.log(`Calculate Square = ${calculat_square(data)}`);
// console.log(`Calculate Square = ${calculat_AddOne(data)}`);

// Step1 End

// Optimize Code using high order function 
// high order function takes a argument and returns a argument
// step2 start

const calSquare = function(y){
    return y*2;
}

const calAddone =function(x){
    return x+1;
}
const calculate=function(data,func){
    const output=[];
    for(i=0;i<data.length;i++){
        output.push(func(data[i]));
    }
    return output;
}

Array.prototype.customFunc=function(func){
    const output=[];
    for(i=0;i<this.length;i++){
        output.push(func(this[i]));
    }
    return output;
}


console.log(`calculate square= ${calculate(data,calSquare)}`);
console.log(`calculate one= ${calculate(data,calAddone)}`);

// similar we can achive using map high order function
console.log(data.map(calAddone));
console.log(data.map(calSquare));

console.log(`calculate square using customFunc= ${data.customFunc(calSquare)}`);
console.log(`calculate one using customFunc= ${data.customFunc(calAddone)}`);

// step2 end
