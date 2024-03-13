// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }


// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(`outer loop ${i}`);
//     for (let j = 0; j < 10; j++) {
//         const element = j;
//         console.log(`inner loop ${j}`);
        
//     }

// Printed Table Below
// for (let i = 2; i <= 10; i++){
//     for(let j =2; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j} `);
//     }
// }

// let myArr = ["Huzair","Khizar","Huzaifa","Abdullah"]
// console.log(myArr);
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// // }

// for (let index = 1; index <= 20; index++){
// if (index == 5) {
//     break
// }
//     console.log(index);   
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    if (index == 5) {
     continue
    }
    console.log(element);
    
}