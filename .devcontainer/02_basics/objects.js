//singleton 


//object literals


//symbol 

const mysym = Symbol("key1")
//important method of symbol 
//if we want to declare symbol in object so use [ ] when we are defined key and [ ] also use when we try to print


const user = {
    name : "vishal",
    age : 18,
    rollno : 23,
    fathername : "kishan lal gotharwal",
    "full name" : "vishal gotharwal",
    [mysym] :  "my key1"
}

console.log(user.name)

//we are use this type of method because we are not able to insert the full name using dot mehod 
//so we are always use this method
console.log(user["fathername"])
console.log(user[mysym])

user.greeting  = function(){
    console.log("helo user")
}
console.log(user.greeting())
console.log(user.greeting)


