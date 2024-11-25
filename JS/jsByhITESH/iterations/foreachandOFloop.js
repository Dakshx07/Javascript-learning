// for of loop

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}

const greetings="hello good morning"
for (const greet of greetings) {
    // console.log(greet)

}


//Maps
// const maps = new  Map ([
//     [1,"a"],
//         [2 , "b"],
//         [3 , "c"],
// ]);
//
// console.log(maps);

const map=new Map()
map.set("IN","India")
map.set("USA","United states of america")
map.set("fr","France")
map.set("IN","India")

//console.log(map)

// for (const [key, value] of map) {                   //[key,value] is a syntax to get ans in normal pairs
//     console.log(key,value)
// }

// for ( i = 0; i <1 ; i++) {
//     console.log(map)
// }

const myObject = {
    'game1' :'NFS',
    'game2':'pubg'
}


for (const [key,value] of Object.entries(myObject)) {      // as objects are not iterable so we use Objects.entries to print okeys and values of objcect using for of loop
    console.log(key+ ":-" + value)
}