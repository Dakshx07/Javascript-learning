function calculateCartPrice(...num1){
        return num1
}

// console.log(calculateCartPrice(200,400,500))


const user={
    username:"daksh",
    price:"999"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// console.log(handleObject(user))

handleObject({
    username:"sam",
    price:92992
})


const myNewArray =[300,100,300,200]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,600]))