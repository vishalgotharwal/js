//rest operator ->...
//when input in the finction are more than one so for the print we are use rest mehod 
 
function calculate(...num1) {
return num1 
}  
 let a =calculate(2,4,5,6,7)
 console.log(a)


 //object in functins

 const user ={
    username : "vishal",
    age : 18
 }

 function handleobject (anyobject) {
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`)
 }

 handleobject(user)


 //arrays in function 

let arrays  =[1,2,3]
function arrayfunction(getarray){
    return getarray[1]
}

console.log(arrayfunction(arrays))