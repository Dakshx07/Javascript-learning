// singleton
//Object.create( )


// object literals

const mysym=Symbol("key1")


const JsUser={
    name : "Daksh",
    "full name":"Daksh Hiran",
    [mysym]:"mykey1",                     //we use[] to use symbols in objects its a syntax
    age :18,
    location  : "jaipur",
    email : "daksh@google.com",
    isloogesIn : false,
    lastLOGINDays : ["monday","saturday"]
}

// console.log(JsUser.isloogesIn)
// console.log((JsUser["full name"]));
// console.log( JsUser[mysym])
JsUser.email="daksh@duxx.com"
// Object.freeze(JsUser)
JsUser.email="daksh@micro.com"
// console.log(JsUser)

JsUser.greeeting=function (){
    console.log("HEllo JS User")
}

JsUser.greeetingTwo=function (){
    console.log(`HEllo JS User,${this.name}`)
}

console.log(JsUser.greeetingTwo())