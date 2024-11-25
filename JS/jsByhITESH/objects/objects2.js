// const tinderuser=Object()
const tinderuser={ }

tinderuser.id="abc777"
tinderuser.name="Sam"
tinderuser.isLoggedIn=false

// console.log(tinderuser)

const regularUser={
    email : "thor@gmail.com",
    fullname: {                                    //nested obj
        userFullname: {
            firstname: "thor",
            lastname:"ragnrok"
        }
    }

}

// console.log(regularUser.fullname.userFullname.lastname)
const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

// const obj3={obj1,obj2}      // not good
//
// const obj3=Object.assign({},obj1,obj2)              //it is good practice to add {} in the obj3   ye bhi kam hi use kar na hai

// const obj3={...obj1,...obj2}              // we use this to combine
// console.log(obj3)


const users=[
    {
        id:1,
        emial:"d@gmail.com"
    },
    {
        id:1,
        emial:"d@gmail.com"
    },
    {
        id:1,
        emial:"d@gmail.com"
    }
]

users[1].email
console.log(tinderuser)

console.log(Object.keys(tinderuser))                   // imp things used in projects also
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty("isLoggedIn"))