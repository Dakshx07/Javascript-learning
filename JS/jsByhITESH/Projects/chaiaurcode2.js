// const form=document.querySelector('form');
// //this usecase will give you empty space
// // const height= parseInt( document.querySelector('#height').value)
//
// form.addEventListener('submit', function (e){
//     e.preventDefault();
//
//
//     const height= parseInt( document.querySelector('#height').value)
//     const weight= parseInt( document.querySelector('#weight').value)
//     const results=  document.querySelector('#results');
//
//     if(height === ''  || height<0  || isNaN( height) ){
//         results.innerHTML=` ${height}`
//     }else  if(weight === ''  || weight<0  || isNaN( weight) ){
//         results.innerHTML=`${weight}`
//     }else{
//        const bmi= (weight / ((height*height) / 10000)).toFixed(2)
//         //show the result
//
//         results.innerHTML=`<span>${bmi}</span>`
//     }
// })
//


const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = 'Please enter a valid height';
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please enter a valid weight';
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Show the result
        results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;
    }
});
