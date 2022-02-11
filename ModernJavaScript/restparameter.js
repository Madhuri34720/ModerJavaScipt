// https://www.youtube.com/watch?v=gTCA3MPpGYo&list=PLC8OkhrVTHNFzxNVvdtCmTw5OSYs4wv5H&index=7

// https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/#:~:text=The%20main%20difference%20between%20rest,expands%20iterables%20into%20individual%20elements.


// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
 const result= myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
  
  // The invocation above will return:

  console.log(result);
//   ["CodeSweetly", "Web Developer", "Male"]



// Define a destructuring array with two regular variables and one rest variable:
const [firstName1, lastName1, ...otherInfo1] = [
    "Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"
  ];
  
  // Invoke the otherInfo variable:
  console.log(otherInfo1); 
  
  // The invocation above will return:
//   ["CodeSweetly", "Web Developer", "Male"]