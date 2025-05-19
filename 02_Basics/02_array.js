const pop_music = [
    "Billie Jean",
    "I Want It That Way",
    "Umbrella",
    "Shape of You",
    "Bad Guy",
    "Blinding Lights"
];
const classical_music = [
    "Symphony No. 5",
    "Clair de Lune",
    "The Four Seasons",
    "The Nutcracker Suite",
    "Eine kleine Nachtmusik"
];

// pop_music.push(classical_music); // add classical music array to pop music array
// console.log(pop_music); // ["Billie Jean", "I Want It That Way", "Umbrella", "Shape of You", "Bad Guy", "Blinding Lights", Array(5)]
// console.log(pop_music[6][1]); // "Clair de Lune" (accessing classical music array from pop music array)


// const allMusic = pop_music.concat(classical_music); // concatenate classical music array to pop music array  
// console.log(allMusic); // ["Billie Jean", "I Want It That Way", "Umbrella", "Shape of You", "Bad Guy", "Blinding Lights", "Symphony No. 5", "Clair de Lune", "The Four Seasons", "The Nutcracker Suite", "Eine kleine Nachtmusik"]
// console.log(allMusic.length); // 11


// const allNewMusic = [...pop_music, ...classical_music]; // spread operator to concatenate classical music array to pop music array
// console.log(allNewMusic); // ["Billie Jean", "I Want It That Way", "Umbrella", "Shape of You", "Bad Guy", "Blinding Lights", "Symphony No. 5", "Clair de Lune", "The Four Seasons", "The Nutcracker Suite", "Eine kleine Nachtmusik"]


// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6,7,[4,5]]]; // nested array
// const realAnotherArray = anotherArray.flat(Infinity); // flatten the array
// console.log(realAnotherArray); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(Array.isArray("Hari Acharya")); // false
// console.log(Array.from("Hari Acharya")); // [ 'H', 'a', 'r', 'i', ' ', 'A', 'c', 'h', 'a', 'r', 'y', 'a' ]  
// console.log(Array.from("Hari Acharya", (char) => char.toUpperCase())); // [ 'H', 'A', 'R', 'I', ' ', 'A', 'C', 'H', 'A', 'R', 'Y', 'A' ]    
// console.log(Array.from({name: "Hari Acharya"})); // [  ]
// console.log(Array.from({length: 5})); // [ <5 empty items> ]
// console.log(Array.from({length: 5}, (value, index) => index)); // [ 0, 1, 2, 3, 4 ]

// let score1 = 100;
// let score2 = 200;   
// let score3 = 300;

// console.log(score1, score2, score3); // 100 200 300
// let scores = [score1, score2, score3]; // array of scores       
// console.log(scores); // [100, 200, 300]

// console.log(Array.of(score1, score2, score3)); // [100, 200, 300]



