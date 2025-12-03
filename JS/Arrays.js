// let marks=[97,5,6,77,88,6,5]
// console.log(marks)

// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"]
// for(let i=0;i<=5;i++){
//     console.log(heroes[i])
// }
// for(let idx=0;idx<heroes.length;idx++){
//     console.log(heroes[idx])
// }

//for-of
// for(let hero of heroes){
//     console.log(hero)
// }

// let cities=["chennai,hyderbad,gurgoan,nodia,jaislamr,pune"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// question
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(" the avg marks of class is "+`${avg}`)


//  question
let prices=[250,645,300,900,50];
// let idx=0;
// for(let val of prices){
//     console.log(`value at index ${idx}=${val}`)
//     let offer =val /10;
//     prices[idx]=prices[idx]-offer;
//     console.log(`values after offer = ${prices[idx]}`);
//     idx++;

// }
// console.log(val)

// for(let i=0;i<prices.length;i++){
//     let offer = prices[i]/10;
//     prices[i]-= offer;

// }
// console.log(prices)

Consider iterating over a copy of the array or using methods that are safer for modification, like `map` if you intend to create a new array with the modified values. For in-place modification as shown, ensure the loop bounds and indices remain valid throughout the process. The current loop is safe as it only modifies existing elements without changing the array's length or element order.
// foodItems.push("lichi")
// console.log(foodItems)
// foodItems.pop("lichi")
// console.log(foodItems)
// console.log(foodItems);
// console.log(foodItems.toString)
// console.log(foodItems)

// concat
// let marvel_heroes = ["thor", "spiderman", "ironamn","Dr.Doom","Deadppol","Wolverine","dOGPOOL"]
// let dc_heroes = ["superman,batman"];
// let indianHeroes=["krissh,shaktiman,doreamon"]
// console.log(marvel_heroes.concat(dc_heroes,indianHeroes))

// unshift
// marvel_heroes.unshift("blackwidow");
// console.log(marvel_heroes)2
// console.log(marvel_heroes.slice(1,3));
// console.log(marvel_heroes.splice(1,3,"flacon","hulk","cap ass"))
// let ra=[1,2,4,6,8,7,5,9]
// ra.splice(2,0,101,102)
// ra.splice(3,1,101)
// ra.splice(3,1)



//      Question
let arr=["bloomberg","Microsoft","Uber","Google","IBM","netflix"]
arr.splice(0,1)
arr.splice(1,1,"ola")
arr.push("amazon")


