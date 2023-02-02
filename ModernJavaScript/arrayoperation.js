// Remove Duplicate from array
const removeDuplicate = arr => [... new Set(arr)];
console.log(removeDuplicate([2,3,4,5,3,2,7,8,2]));

// Convert number to array

const numToArray = (num) => [...`${num}`].map(n=>parseInt(n));

console.log(numToArray(12345678));


