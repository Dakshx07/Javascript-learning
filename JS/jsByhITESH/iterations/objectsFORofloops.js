const myObject= {
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple",
}

for (const key in myObject) {
   // console.log(myObject[key])
    //console.log(`${key} shortcut for ${myObject[key]}`)
}

const arr = ["cpp", "js", "cpp", "rb", "swift"];

for (const key in arr) {
  //  console.log(key+":-"+arr[key]);
}


const map=new Map()
map.set("IN","India")
map.set("USA","United states of america")
map.set("fr","France")
map.set("IN","India")


for (const Key in map) {
    console.log(key)
}