let myObj = {"Huzaifa": "Talli","Khizar": "Rafique","Abdullah": "chutiya"}
for (const key in myObj) {

    // console.log(`${key} ko piyaar se kehte hen ${myObj[key]}`);
}


// map stores unique values and dont duplicate sam values

const map = new Map()
map.set("username","Huzair")
map.set("age",17)
// console.log(map);

for (const [i] of map) {
    // console.log(i);
}

let myObj1= {
    "game1":"NFS","game2":"Cricket 07"
}
for (const key in myObj1) {
    // console.log(`Key is ${key} and value is ${myObj1[key]}`);
}

myArr = [1,2,3,4,5,6];
for (const key of myArr) {
    console.log(key);
}



let day = 99;
// switch (day) {
//     case 0:
//         day="Monday"
//         break;

//         case 1:
//             day="Tuesday"
//             break;

//             case 2:
//         day="Wednesday"
//         break;

//         case 3:
//         day="Thursday"
//         break;
//         case 4:
//         day="Friday"
//         break;
//     default:day="No Day"
//         break;
// }
// console.log(day);