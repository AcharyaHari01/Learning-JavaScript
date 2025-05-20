
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const newNumbs = myNumbers.map ((num)=> { return num + 10})

const newNumbs = myNums
    .map((num) => {
        return num + 10;
    })
    .map((num) => {
        return num * 2;
    })
    .map((num) => {
        return num - 5;
    })                  
    .filter((num) => {
        return num > 15;
    })
    .sort((a, b) => {
        return a - b;
    });
console.log(newNumbs); // [ 17, 19, 21, 23, 25, 27, 29, 31, 33, 35 ]

