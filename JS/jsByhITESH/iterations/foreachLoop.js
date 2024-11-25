const coding=["js","py","rb","cpp","java"]

// coding.forEach( function (item){                   // in for each loop in function we do not give names
//     console.log(item)
// })


// coding.forEach( (item) => {           //arrow function
//     console.log(item)
// })


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach( (item ,index , arr) => {
    //console.log(item,index,arr)
})


const myCoding =[
    {
        langauge : "javascript",
        languageFile :"js",
    },
    {
        langauge : "java",
        languageFile :"java",
    },
    {
        langauge : "python",
        languageFile :"py",
    }
]

myCoding.forEach( (item) => {
    console.log(item.langauge )
})