const marvel_heroes=["ironman","thor","cpass","widow"]
const dc_heroes=["superman","batmna","wodner women","flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[4])
//
// const allheroes=marvel_heroes.concat(dc_heroes)
// console.log(allheroes)

// const newheroes=[...marvel_heroes,...dc_heroes]
// console.log((newheroes ))

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_aother_array=another_array.flat(Infinity)

// console.log(real_aother_array)


// console.log(Array.isArray("Daksh"))           // it will give true or false
// console.log((Array.from("Daksh")))        //Array.from coverts anything to array
// console.log(Array.from({name: "Daksh"}))       // intertsing cse it does not convert on=bject into array dirstlty


const score1 =33
const score2 =44
const score3=  55

console.log(Array.of(score1,score2,score3))