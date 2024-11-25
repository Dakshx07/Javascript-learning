var c=600
let a=100            //globally declaraed or global scope

if (true) {                       // block scope
    let a=10
    const b=30
    // console.log("inner :",a)

}

// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username="daksh"

    function two(){
        const website="Youtube"
        // console.log(username )
    }

    // console.log(website)

    two()
}

one()


if(true){
    const username="daksh"
    if(username==="daksh"){
        const website=" youtube"
        // console.log(username+website)
    }
    // console.log(website)
}

// console.log(username)



// ++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num+1
}
// addOne(5)


console.log(addTwo(5))                   // becoz function is hold in a variable thats why its not execute
const addTwo=function (num){
    return num+2
}
