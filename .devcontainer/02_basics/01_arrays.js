//arrays

let a = [1,2,3,4,5,6]

console.log(a)
console.log(typeof a)

//join method convert array into string
console.log(a.join())
a.push(100)
console.log(a)

console.log(a.pop())
console.log(a)


//unshift is similar to push but its add value in the first position
a.unshift(0)
//shift is similar to pop
console.log(a)
//shallow copy ->when we are change in  value to its reflect its referance and referance also change
//deep copy ->its reverse shallow copy

//includes
console.log(a.includes(1))


//slice and splice 
//splice mmethod are use when we want to change the real array 
//for example our array is [1,2,3,4,5]
//we are use splice method in myarr
//so its given and is 1,2,3,4
//but our real array now is only  5

console.log("a ",a)

const mynewarr  = a.slice(1,4)
console.log(mynewarr)
const myarr = a.splice(1,4)
console.log(myarr)
