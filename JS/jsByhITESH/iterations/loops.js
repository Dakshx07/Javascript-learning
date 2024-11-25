// for
let num=1
for (let index = 0; index <=10 ; index++) {
   const element=index;
   if(element==5){
       // console.log(" 5 is the best number")
   }
    // console.log(element)
}

for (let i = 0; i <=10 ; i++) {
   // console.log(`outer loop value: ${i}`)
    for (let j = 0; j <=10 ; j++) {
       // console.log(`Inner  loop value: ${j} and inner loop ${i}`)
        //console.log(i + "*" + j + "=" + i*j)
    }
}


let arr=["flash","batman","superman","blackAdam"]
//console.log(arr.length)
for (let i = 0; i <arr.length; i++) {
const element=arr[i];
   // console.log(element)
}




// break and continue

//

for (let i = 1; i <=20; i++) {
    if(i==5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`value of i is : ${i}`)
}