var variable = 10;
(()=>{
   console.log(variable);
   var variable = 20;
   console.log(variable);
})();



function getValue(){
    return variable;
}

function printconsole(){
    getValue();
    console.log(variable);
    var variable = 20;
    console.log(variable);
}

const person = {
    name: 'Max',
    greet: ()=>{
        console.log(this); // ???
        console.log(this.name);
    }
};
 
const { greet } = person;
greet();

console.log('start')
setTimeout(() => {
  console.log('setTimeout')
})
Promise.resolve().then(() => {
  console.log('resolve')
})
console.log('end')


for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i));
  }


  new Promise((resolve)=>resolve('I am a promise')).then((res)=>console.log(res));
  setTimeout(()=>{
      console.log("I am a set timeout!");
  },0);
  console.log("I am a simple log!");