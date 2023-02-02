const b=10;
// const b=30;    
// if declare on same scope error would be  Uncaught SyntaxError: Identifier 'b' has already been declared
if(true){
    const b=20;    
    console.log(`B value is= ${b}`);
}
console.log(`B value is= ${b}`);


// Iterating complex object
const userInfo = {
    firstName: 'Avi',
    lastName: 'Flombaum',
    companyName: 'Flatbook Labs',
    jobTitle: 'Developer Apprentice',
    friend1firstName: 'Joe',
    friend1lastName: 'Burgess',
    friend1companyName: 'Flatbook Labs',
    friend1jobTitle: 'Developer Apprentice',
    friend2firstName: 'Gabe',
    friend2lastName: 'Jackson',
    friend2companyName: 'Flatbook Labs',
    friend2jobTitle: 'Senior Developer',
    project1title: 'Flatbook',
    project1description: 'The premier Flatiron School-based social network in the world.',
    project2title: 'Scuber',
    project2description: 'A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.'
  };

// https://learn.co/lessons/js-looping-and-iteration-traversing-nested-objects-readme

//   for (const key in userInfo) {
//     console.log(userInfo[key]);
//   }


  Object.keys(userInfo).map((objkey)=>console.log(userInfo[objkey]));


  console.log("b");

  setTimeout(() => {
    console.log("i am inside setTimeout");
  }, 5000);

  setInterval(() => {
      console.log("i am inside setInterval");
  }, 3000);


  console.log("c");


//   Swap variable  using es6
let a=6;
let c=10;
[a,c]=[c,a];
console.log(`a= ${a} and c= ${c}`);


// mori and immutable js for persistent data structure

// FUNCTIONAL programming for https://slidr.io/vakila/learning-functional-programming-with-javascript#31


var exampleArray = [
    "First item in the array",
    "I'm the second item in this array",
    "Obviously i'm the last item"
  ];
  console.table(exampleArray);

  var arrayOfArrays = [
    ["Phone", "Samsung"], 
     ["Car", "Ferrari"], 
     ["Sports", "Football"]
];
console.table(arrayOfArrays);

function Employee(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  var team = {};
    team.leader = new Employee("Peter", "Eze", "peter@test.com");
    team.manager = new Employee("Chris", "Nwamba", "chris@test.com");
    team.writer = new Employee("William", "Imoh", "william@test.com");
          
  console.table(team, ["firstName"]);






  