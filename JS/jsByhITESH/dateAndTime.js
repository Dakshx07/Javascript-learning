// Dates

let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate.toString());
// // console.log(myDate.getFullYear());    // 2024
// // console.log(myDate.getMonth());       // oct
// // console.log(myDate.toDateString());
// // console.log(myDate.toLocaleDateString());
// // console.log(myDate.toLocaleTimeString());
// // console.log(myDate.toJSON());
// // console.log(myDate.toISOString())
// // console.log(myDate.getTimezoneOffset())      //?

//  myCreatedDate= new Date(2024,0,10)
// let myCreatedDate= new Date(2024,0,10,5,3)
// let myCreatedDate= new Date("2024-01-14")
let myCreatedDate= new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimestamp= Date.now()
// console.log((myTimestamp))
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
// console.log((newDate))
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

newDate.toLocaleString('default' ,{
    weekday: 'long',
})

console.log(newDate.toLocaleString('default'))