

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})();                                    // IN THIS SYNTAX WE HAVE PUT ; YO TERMINATE OR END IT

( function aurcode(){
    console.log(`DB CONNECTED TWO`)
})();


//arrow function
( () => {
    // UNNAMED IIFE
    console.log(`DB CONNECTED Three`)
})();

( (name) => {
    console.log(`DB CONNECTED Three ${name}`)           // parameters can also be passed in it
})('daksh');


