function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Ashton"));

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(20, 25));

let x = 10;

function changeValue() {
    let x = 5
    console.log(x); 
}

changeValue();
console.log(x); 

function outerFunction() {
    let count = 0;
    return function() {
        count++; 
        return count; 
    };
}

const counter = outerFunction();

console.log(counter()); 
console.log(counter()); 
console.log(counter());
console.log(counter());
console.log(counter());
