// function greeting(){
//     alert("Hello World");
// }

// greeting();
// greeting();
// greeting();

// let annoucement = function(){
//     alert("You are learning JavaScript functions.");
// }

// annoucement();

// let cubeThis = function(someNumber){
//     document.getElementById("output").innerHTML = someNumber * someNumber * someNumber;

// }

// let x = prompt("What number would you like to cube?");
// cubeThis(x);

// let rectangleArea = function(lengthX, widthX){
//     let area = lengthX * widthX;
//     return area;
//     //document.getElementById("output").innerHTML = area;
// }

let rectangleArea = (length, width) => length*width;

let greeting = () => "Hello World";

console.log(greeting());

let length = prompt ("Length?");
let width = prompt ("Width?");

document.getElementById("output").innerHTML = rectangleArea(length, width);