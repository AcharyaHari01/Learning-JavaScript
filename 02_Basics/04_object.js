// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "John Doe";
tinderUser.isLoggedIn = false;


// console.log(tinderUser); // { id: '123abc', name: 'John Doe', isLoggedIn: false }

// console.log(typeof tinderUser); // object
// console.log(tinderUser instanceof Object); // true

const regularUser = {
    email : "someone@gmail.com",
    fullname: {
        userFullname:{
            firstName: "Hari ",
            lastName: "Acharya"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName); // Hari

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 }; // nested object
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// const obj3 = Object.assign({}, obj1, obj2);// shallow copy // targer object, source object
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = { ...obj1, ...obj2 }; // spread operator
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3[1]); // a

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    }
]
// console.log(users[1].email);//
// console.log(typeof users[1]); // object

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'John Doe', false ]  
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'John Doe' ], [ 'isLoggedIn', false ] ]
// console.log(Object.entries(tinderUser).length); // 3


// console.log(tinderUser.hasOwnProperty("id")); // true



// ######################################## object destructuring ########################################

const course = { 
    courseName : "JavaScript",
    coursePrice : 199,
    courseInstructor : "Hari Acharya",
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor); // Hari Acharya

const {courseInstructor: instructor} = course; // object destructuring
console.log(instructor); // Hari Acharya
// console.log(courseInstructor); // ReferenceError: courseInstructor is not defined
/*
it is a common practice to use a different variable name when destructuring to avoid naming conflicts with existing variables. This is especially useful when you want to extract properties from an object and assign them to variables with different names.
For example, if you have a variable named courseInstructor already defined in your code, and you want to extract the courseInstructor property from the course object, you can use the following syntax:

const navbar = ({company}) => {

}

navbar(company = "Google") // default parameter
// console.log(company); // Google  
*/

// const {courseInstructor: instructor, courseName: name} = course; // object destructuring
// console.log(instructor); // Hari Acharya
// console.log(name); // JavaScript

