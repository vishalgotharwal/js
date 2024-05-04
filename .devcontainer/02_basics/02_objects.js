
//singleton

const tinderuser = new Object() //->its a singleton object

const t = {}  //->it is a literal object


 tinderuser.id = "123abc"
 tinderuser.name = "vishal"
 tinderuser.isLoggedIn = "false"

console.log(tinderuser)


//object in the object

// const regularuser = {
//     email  :"vishakjsdhf@gamil.com",
//     fullname : {
//         userfullname :{
//             firstname  : "hitesh",
//             lastname  : "choudhary",
//         }
//     }
// }

// regularuser.email= "rahulgothar@gmauil.com"
// console.log(regularuser.email)

const obj1 = {
    1: "a",
    2:"b",
    3: "c"
}
const obj2  ={
    4:"d",
    5:"e"
}

//addign are use got marging objects
//{}-.it is target and obj1 and obj 2 is value
const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

//it is main mehod these are use in array and object for marging

const obj4 = {...obj1,...obj2}
// console.log(obj4)



