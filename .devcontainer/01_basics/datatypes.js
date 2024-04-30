//primitive

// 7 types : string ,number,boolean , null, undefined, symbol ,bigInt

//symbols
const id = Symbol('123')
const anotherid = Symbol('123')

//always symbol values are different 
console.log(id === anotherid);


const bigNumber = 21235652525555n
//JavaScript is a dynamic programming language. This means that variables in JavaScript can hold values of any type, and the type of a variable can change over time. Additionally, JavaScript does not require variable declaration before use, allowing for flexibility in coding. Dynamic typing and dynamic binding are key characteristics of JavaScript, making it suitable for a wide range of tasks, from simple scripting to complex web applications. 



//reference(non primitive)


//arrays,objects ,functions 

const heros = ["iron man","doga", "thor"];
 let myobj= { 
    name:"vishal",
    age : 22

}
console.log(myobj)

console.log(heros);

//functions

 

 const myfunction = function(){
console.log("hello world") 
}
console.log(typeof myfunction);
console.log(typeof Symbol);





