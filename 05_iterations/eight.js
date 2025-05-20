
// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(accumulator);
//     console.log(currentValue);
//     return accumulator + currentValue;
// }, 0)   


// const myTotal = myNums.reduce((accumulator, currentValue) => {
//     console.log(accumulator);
//     console.log(currentValue);
//     return accumulator + currentValue;
// }, 0)   


// console.log(myTotal); // 6

const shoppingCarr = [
    {
        itemName : 'Apple',
        itemPrice : 10
    },
    {
        itemName : 'Banana',
        itemPrice : 20
    },
    {
        itemName : 'Orange',
        itemPrice : 30
    },
    {
        itemName : 'Mango',
        itemPrice : 40
    }
    
]

const totalPrice = shoppingCarr.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    console.log(currentValue);
    return accumulator + currentValue.itemPrice;
}, 0)
console.log(totalPrice); // 100
