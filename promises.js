const promiseOne= new Promise(function (resolve, reject) {
    //Do an async task
    setTimeout(function (){
        console.log("Async task is completed ")
        resolve()                           //resolve connects .then
     },1000)
})

promiseOne.then(function (){
    console.log("promise consumed")
})


new Promise(function (resolve,reject){
    setTimeout(function (){
        console.log("Async task two")
        resolve()
    },100)
}).then(function (){
    console.log("Async two resolved ")
})

const promiseThree= new Promise(function (resolve,reject){
    setTimeout(function (){
        resolve({username : "Daksh" ,  email : "chai@example.com"})
    },1000)
})

promiseThree.then(function (user){
    console.log(user)
})

const promiseFour=new Promise(function (resolve,reject){
    setTimeout(function (){
        let error =true
        if(!error){
            resolve({username : "Daksh" , password : "123"})
        }else{
            reject('ERROR something went wrong')
        }
    },1000)
})

promiseFour
    .then((user) => {
    console.log(user)
    return user.username
})
    .then((username) => {
    console.log(username)
})
    .catch(function (error) {
    console.log(error)
}).finally(function (){
    console.log("The promise if finally resloved or rejected ")
})

const promiseFive=new Promise(function (resolve,reject){
    setTimeout(function (){
        let error =true
        if(!error){
            resolve({username : "Javascript" , password : "123"})
        }else{
            reject('ERROR JS went wrong')
        }
    },1000)
})

async function consumePromiseFive (){
   try {
       const response=await promiseFive
       console.log(response)
   } catch (error) {
       console.log(error)
   }
}
consumePromiseFive()


// async function getAllUsers(){
//   try {
//       const response =await fetch('https://jsonplaceholder.typicode.com/users')
   
//       const data= await response.json()
//       console.log(data)
//   }catch(err){
//       console.log(err)
//   }
// }
// getAllUsers()

