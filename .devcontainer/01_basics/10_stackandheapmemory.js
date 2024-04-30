//two types of memory

//1 .stack -->(primitive)  --primitive data types are stored in stack. it means they are stored data and when we want to change the data its change only in copy but the real data are exact same so it is not changed the data in real value.
//lets talk with example that's are given below 
//in this example we are using a another variable that name is myname2 and we are put myname value on this and then change the myname2 value but then we want to access myname its remains same.


//2. heap  -->(nonprimitive)
//but in heap memory its change the also the user email with rahul email.



let myname  = "vishal"

let user ={
    email:"vishalgotharwal@gmail.com",
    name:"rahul",
    upi:"sdfhdsh"
}

let user2 =user;
user2.email = "rahulgotharwal@gmail.com"
console.log(user2.email)
console.log(user.email)