const alphabet = ['a', 'b', 'c', 'd'];
const numbers = ['1', '2', '3']; 

const [a,,c] = alphabet //destructuring (only a and c)

const [a,,c,...rest] = alphabet; 

console.log(rest); 

const newArray = alphabet.concat(numbers); 

const NewwAarray = [...alphabet, ...numbers]; 

function sumAndMultiply(a, b) {
    return [a+b, a*b]
}

const array = sumAndMultiply(2,3); 

const [sum, multiply] = sumAndMultiply(2,3); 

//object destructing 

const personTwo = {
    name: 'taco',
    age: 33
}; 


const [ name, firstName ='John', age] = personTwo; //based on name of key not position 

//mapping new quality of object 

//can nest object deconstructor if referring to nested obkect 

// const personThree = {...personOne, ...personTwo } //combine two 