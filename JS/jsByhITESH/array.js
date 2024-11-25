const arr=[1,2,3,44.4,true,"hello"]
// console.log(arr)

const Heroes=["marvel","ironman","capass","thor","hulk"]

// const arr2=new array(1,2,3,4,5)
// // console.log(arr[4])


// Array methods
// arr.push(777)
// console.log(arr)
// arr.pop()
// arr.unshift(7965645)      //add elements from starting
//  arr.shift()       // removes first element of the array
//
// console.log(arr.includes(9))
// console.log(arr.indexOf(9))

const newArr=arr.join()     // changes array into strings
// console.log(arr)
// console.log(newArr)
// console.log(typeof newArr)

// slice and splice
console.log("A  " ,newArr)

const myn1=arr.slice(1,3)         //slice does not include last elemnt

console.log(myn1)
console.log("B  ",newArr)

const myn2=arr.splice(1,3)
console.log("C   ",arr)//splice include last element also
console.log(myn2)

