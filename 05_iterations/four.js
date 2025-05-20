const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    php: 'PHP',
    c: 'C',
    cpp: 'C++',
    java: 'Java',
    go: 'Go',
    cs: 'C#',
    r: 'R',
    swift: 'Swift',
    kotlin: 'Kotlin',
    rust: 'Rust',
    ts: 'TypeScript',
    html: 'HTML',
    css: 'CSS',
    sql: 'SQL',

}
for (const key in myObject) {
    console.log(key);
    // console.log(`Key is ${key} and value is ${myObject[key]}`);

}

const programming = ["JavaScript", "Python", "Ruby", "PHP", "C", "C++", "Java", "Go", "C#", "R", "Swift", "Kotlin", "Rust", "TypeScript", "HTML", "CSS", "SQL"];
for (const key in programming) {
    // console.log(key);
    // console.log(`Key is ${key} and value is ${programming[key]}`);

}

// maps
const map = new Map()
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
map.set("country", "USA");
map.set("isMarried", false);
map.set("isEmployed", true);

for (const key in map) {
    // console.log(key);//  // TypeError: map is not iterable
    // console.log(`Key is ${key} and value is ${map[key]}`);//  // TypeError: map is not iterable 

}

// iterable => array, string, map, set
// not iterable => object, number, boolean, null, undefined

