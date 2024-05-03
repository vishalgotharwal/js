const marverl = ["thor" ,"ironman" ,"spiderman","captainamerics" ]

const dc = ["superman" ,"flash" ,"batman"]


//push and concat method are same when we are use this type
// marverl.push(dc)

// console.log(marverl)
// console.log(marverl.length)

// marverl.concat(dc)
// console.log(marverl)

const allheroes = marverl.concat(dc)
console.log(allheroes)


const allhero  = [...marverl,...dc]
console.log(allhero)

//important method

const another_array = [1,2,3,[4,5,[6,7,[8,9,[10]]]]]

const real_array  = another_array.flat(Infinity)
console.log(real_array)




 console.log(Array.isArray("vishal"))
 console.log(Array.from("vishal"))