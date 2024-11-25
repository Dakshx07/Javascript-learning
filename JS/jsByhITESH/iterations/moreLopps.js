const coding=["js","py","rb","cpp","java"]
//
// const values = coding.forEach( (items) => {       // for each doesnot reurn values
//     console.log(items)
//      return items
// })
//
// console.log(values)


//filter
const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (nums) => {
//     return nums > 4                                 // in arrow functions we have write RETURN
// } )

const newNums=[]

myNums.forEach( (nums) => {
      if(nums > 4){
          newNums.push(nums)
      }
})

// console.log(newNums)


const books =[
    {
        title : "book 1 " , genre : "friction", publish : "1981",edition :"2004"
    }
    ,{
        title : "book 2 " , genre : "friction", publish : "2001",edition :"2004"
    }
    ,{
        title : "book 3 " , genre : "friction", publish : "1999",edition :"2004"
    }
    ,{
        title : "book 4 " , genre : "friction", publish : "2011",edition :"2004"
    }
    ,{
        title : "book 5 " , genre : "history", publish : "2021",edition :"2004"
    }
    ,{
        title : "book 6 " , genre : "history", publish : "2031",edition :"2004"
    },
    {
        title : "book 7 " , genre : "friction", publish : "1981",edition :"2004"
    },
    {
        title : "book 8 " , genre : "friction", publish : "1981",edition :"2004"
    },
    {
        title : "book 9 " , genre : "history", publish : "1981",edition :"2004"
    }
]

// const userBooks=books.filter( (bk ) => bk.genre === "history" )

const userBooks=books.filter( (bk ) => bk.publish > 1999 && bk.genre==="history" )

// const userBooks=books.filter((bk) => {
//     return bk.genre === "history"
// })

console.log(userBooks)