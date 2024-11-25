const user={
    username:"daksh",
    price:999,

    welcomeMessage: function (){
        console.log(`${this.username} , welcome to website`)           //this current context ko refer karat hai
        // console.log(this)                                              //gives the current context
    }

}
//
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     let username="daksh"
//     console.log(this.username)
// }
//
// chai()

// const chai=function (){
//     let username="daksh"
//     console.log(this.username)
// }


//ARROW FUNCTION
const chai= () =>{
    let username="daksh"
    console.log(this)
}

// chai()


//basic arrow function
// const addTwo=(num1,num2)=>{
//     return num1+num2          //excpilcit function is when we have write return function
// }


//impliciet return function
// const addTwo=(num1,num2)=>  num1+num2
// const addTwo=(num1,num2)=>  (num1+num2)               //if we use() dont have to write return  ##{used more in react}

const addTwo=(num1,num2)=>  ({username:"daksh"})            // to return object we have use ()

console.log(addTwo(5,8))