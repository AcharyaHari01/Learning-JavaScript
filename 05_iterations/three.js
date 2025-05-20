// for of loop

// ["", "", "", "", "", "", "", "", "", ""]
// [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const num of arr) {
    // console.log(`Number is ${num}`);
    
}

const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(`Character is ${greet}`);
    
}

// Maps

const map = new Map()
map.set("name", "John");
map.set("age", 30); 
map.set("city", "New York");
map.set("country", "USA");
map.set("isMarried", false);
map.set("isEmployed", true);

// console.log(map);

// console.log(`Map size is ${map.size}`); // 6

for (const [keys, value] of map) {
    console.log(keys, ':->', value); //  TypeError: map is not iterable
}


const myObject = {
    'game1': 'Call of Duty',
    'game2': 'Fifa',
    'game3': 'GTA',
    'game4': 'Need for Speed',
    'game5': 'Assassin Creed',
    'game6': 'Far Cry',
    'game7': 'Watch Dogs'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':->', value);//  // TypeError: myObject is not iterable
    
// }

