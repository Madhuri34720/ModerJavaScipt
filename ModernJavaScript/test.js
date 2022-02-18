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