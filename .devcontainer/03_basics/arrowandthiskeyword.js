const user = {
    username:  "vishal",
    price: 999,

    welcomeMessage: function(){
     console.log(`${this.username}, welcome to website`)
    }
}

// user.welcomeMessage()
// user.username  = "sam"
// user.welcomeMessage()

// console.log(this)





// function chai(){
//     let username  = "vishal"
//     console.log(this.username)
// }
// chai()




//arrow function explicit return 
//  const addtwo = (num1 , num2)=> {
//      return num1+num2
// }
// console.log(addtwo(3,4))


//implicit return  arrow function
const addtwo = (num1 , num2)=> 
     (num1+num2)

console.log(addtwo(5,8))
   
