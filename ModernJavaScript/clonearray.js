
// https://holycoders.com/javscript-copy-array/
//Using Modern ES6 Spread Operator
const originalArray = [2,4,6,8,10];

const clone = [...originalArray];
console.log(`originalArray = ${originalArray}`);
console.log(`clone = ${clone}`);

// using slice
const originalArray1 = [1,2,3,4,5];

const clone1 = originalArray1.slice();

console.log(`originalArray1 = ${originalArray1}`);
console.log(`clone1 = ${clone1}`);


//using concat
const originalArray2 = [1,2,3,4,5]
const clone2 = [].concat(originalArray)
console.log(`originalArray2 = ${originalArray2}`);
console.log(`clone2 = ${clone2}`);