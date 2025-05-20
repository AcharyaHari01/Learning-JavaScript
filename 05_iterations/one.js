// for 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        //console.log("Found 5");
        break;
    }
    //console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    //console.log(`outer loop: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop: value ${j} and inner loop index ${i}`);
       // console.log(i + "*" + j + " = " + (i * j));

    }
    
}
let myArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
  //  console.log(`Element at index ${i} is ${element}`);
    
    
}

// breank and continue
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    if (element === "c") {
        //console.log("Found c");
        continue;
    }
    if (element === "f") {
        //console.log("Found e");
        break;
    }
    // console.log(`Element at index ${i} is ${element}`);
    
}

