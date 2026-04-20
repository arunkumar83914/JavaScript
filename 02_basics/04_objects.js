// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
iinderUser.name = "Sammy"
tinderUser.isLoggesIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "arun",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
     {
        id: 1,
        email: "a@gmail.com"
    },
     {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.object(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "arun"
}

//   course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(Instructor);

// {
    // name: "arun",
    // "coursename": "js in hindi",
    // "price": "free"
// }

[
    {},
    {},
    {}
]

