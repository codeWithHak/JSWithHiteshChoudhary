// myObj = {
//     name:"Huzair",
//     age:18,
//     gender:{
//         realGender:{
//             genuineGender:"Male"            
//         }
//     }
// }

// console.log(myObj.gender.realGender.genuineGender);

// obj1 = {1:"a",2:"b",3:"c"}
// obj2 = {4:"d",5:"e",6:"f"}
// // console.log(obj1);
// obj3 = {...obj1,...obj2}
// console.log(obj3);

const userInfo = [
    {
        name:"Kashan",
        age:19,
        gender:"Male"
    },
    {
        name:"Ezan",
        age:17,
        gender:"Male"
    },
    {
        name:"Shayan",
        age:15,
        gender:"Male"
    },
    {
        name:"Saad",
        age:19,
        gender:"Male"
    }
]

const theUserInfo = [
    {
        name:"Kashan",
        age:19,
        gender:"Male"
    },
    {
        name:"Ezan",
        age:17,
        gender:"Male"
    },
    {
        name:"Shayan",
        age:15,
        gender:"Male"
    },
    {
        name:"Saad",
        age:19,
        gender:"Male"
    }
]

// console.log(Object.values(userInfo));

// const tinderUser = Object();
// tinderUser.value = 'my value';
// tinderUser.name = 'my name';
// tinderUser.id = 'my id';
// console.log(tinderUser.id,tinderUser.value,tinderUser.name);
// console.log(...tinderUser.id,...tinderUser.value,...tinderUser.name);

// obj1 = {1:'a', 2:'b'};
// obj2 = {3:'c', 4:'d'};

// obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);
// console.log(userInfo[0].hasOwnProperty('age'));

const course  = {
    name:'web dev',
    length:6,
    trainer:'HAK the G'
}

console.log(course.trainer);

const {trainer: trainee} = course

console.log(typeof trainee);

const {length:l} = course;
console.log(typeof l);

