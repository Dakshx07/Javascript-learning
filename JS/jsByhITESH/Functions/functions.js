//functions

function sayMyName(){
    console.log("D")
    console.log("A")
    console.log("K")
    console.log("S")
    console.log("H")

}

// sayMyName()                  // sayMyName is REFERENCE and () is EXECUTION


// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2)
// }
//
// addTwoNumbers('a','b ')

function addTwoNumbers(num1,num2){

    // let result=num1+num2
    // console.log("daksh")
    return num1 + num2
                        //it will never be execute becoz its after return
}

const result=addTwoNumbers(5,5)
// console.log(result)


function loginUserName(username="sam"){                // can give value ealier also
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`;
}
//
// const res=loginUserName("Daksh")
// console.log(res)

// console.log(loginUserName())          // undefined comes when it is empty
console.log(loginUserName("Daksh"))        //can be overwrite
