// function myFunction(msg,n){
//     console.log(msg,n)
// //    console.log(" we are learning JS");
// //    console.log("welocme to apna college");
// }

// // for(let i=1;i<=5;i++){
// //     console.log(myFunction())
// // }
// myFunction(" i am learning JS",200)

// function sum(n1,n2){
//     return n1+n2;
// }

// // sum(10,20)
// console.log(sum(10,20))


// arrow function :-
// const arrowSum =(a,b) =>{
//     console.log(a*b);
// };


// qustion :-
// function countVowels(str){
   
//     let count =0;
//     for(const char of str){
//     if(char === 'a' || char ==='e' || char=== 'i'||  char ==='o'|| char==='o'|| char==='u'){
//         count++;
//         // return count;
//     }
//     }
//     console.log(count)

// }
// // countVowels("hello")

// or solution
// let countVowels =(str) =>{
//        let count =0;
//            for(const char of str){
//                if(char === 'a' || char ==='e' || char=== 'i'||  char ==='o'|| char==='o'|| char==='u'){
//                    count++;
//                     // return count;
//                 }
//             }
//             console.log("the vowel are : " + count)


// }


// for each function
// let arr=["pune","delhi","noida","gurgoan    ","jaipur"]

// // arr.forEach (function printVal(val){
// //     console.log(val)
// // });
// arr.forEach((val,idx,arr) => {                    // idx and arr and by default parameters
//     console.log(val.toUpperCase(),idx,arr)
// });


//  question :-
// let nums=[1,2,3,4,5]


// let calSqrt=(num) =>{
//     console.log(num*num)
// };
// nums.forEach(calSqrt)
// ;
// arr.forEach(function(n){ 
//     console.log(n*n)
// });

// arr.maps

// let nums=[1,2,3,4,5]

// let newARR=nums.map((val) =>{
//     return val*val;
// });
// console.log(newARR)


// filter
// let nums=[1,2,3,4,5];
// let newArr=nums.filter((val)=>{
//     return val+=3;
// });
// console.log(newArr)

// reduce
// let nums=[5,6,2,1,3]
// const output=nums.reduce((res,curr)=>{
//     return res>curr ? res : curr;
// });
// console.log(output)

//  question :-
// let marks =[90,200,340,40,50]
// let highest = marks.filter((val)=>{
//     return val>90;
// })
// console.log(highest)

// ques:-
let n=prompt("enter number n :-");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((res,curr)=>{
     return res+curr;
});
console.log(sum)