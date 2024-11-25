//if

// === agar datatype ya type bhi same hona chiahye toh ye use karte hai

const temp=41
// if (2==="2"){
//     console.log("executed")
// }
//
// if(temp<40){
//     console.log("executed")
// }else{
//     console.log("not executed")
// }
// console.log("temp is less than 50")     //ye toh execute hoyega hi


const score=200

if(score>100){
    var power="fly"
    // console.log(`User power ${power}`)
}
// console.log(`User power ${power}`)              // if we VAR it will run as var has global access r block scope otherwise if we use const it has only local access {}


const balance=750
// if(balance>500)  console.log("test"), console.log("test2")     // not a god code and practice

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance< 750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn=true

const debitCard=true
const loggedInFRomGoogle=false
const loggedInFRomEmail=true

if(userLoggedIn && userLoggedIn ){
    // console.log("allowed")
}else{
    // console.log("not allowed")
}

if(loggedInFRomGoogle || loggedInFRomEmail){
    // console.log("logged in")
}


// Nullish Coalescing Operator (??) :  null undefined

let val1;
// val1=5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 11

val1= null ?? 10 ?? 20               // jo value phele assign ho jati staring mai hai voh hi rehti hai
// console.log(val1)


// Terniary operator

// conidtion ? true : false


const icetea=100
icetea <= 80 ? console.log("less than 80") : console.log("more than 80")