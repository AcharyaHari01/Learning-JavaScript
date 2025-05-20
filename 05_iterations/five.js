const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];


// coding.forEach( function (item) {
//     console.log(item);
//     // console.log(`Key is ${key} and value is ${coding[key]}`);
// })

// arrow function

// coding.forEach( (item)=>{
//     console.log(item);
  
// })



// function printMe(item) {
//     console.log(item);
// }   
// coding.forEach(printMe);


// coding.forEach((item, index,arr) => {
//     console.log(item);
//     console.log(index);
//     console.log(arr);
// })


const myCoding = [
    {
    languageName: 'JavaScript',
    languageFileName: 'js'
}
{
    languageName: 'Python',
    languageFileName: 'py'
},
{
    languageName: 'Java',
    languageFileName: 'java'
},
{
    languageName: 'C++',
    languageFileName: 'cpp'
},
{
    languageName: 'Ruby',
    languageFileName: 'rb'
}
]

myCoding.forEach((item)=> {

    console.log(item.languageName);
    console.log(item.languageFileName);
    console.log(item);
    
})