// const names = ["Huzaifa",'Huziar',"Abdullah","Norhan","Hanzla"]
// // names.forEach( (element)=>{
// //    // console.log(element);
// // } )
// // function printer (item){
//    // console.log(item);
// // }

// // names.forEach(printer)

// // names.forEach( (item,index,arr) => {
// //    console.log("Name:"+item,""+index,arr);
// // } )

// let sutdentInfo = {
//    name:"Huzair",
//    age:22,
//    qualification:"PHD In Generative AI and Cloud Computing"
// }


// let newArr = ["Kaawish","Zahid","Norhan","Hanzla"];
// newArr.forEach((element) => {
//    console.log(element);
// });


let arrOfObject = [
   {
      codingLanguage:"JavaScript",
      languageExtension:"js"
   },
   {
      codingLanguage:"TypeScript",
      languageExtension:"ts"
   },
   {
      codingLanguage:"Python",
      languageExtension:"py"
   }
]

arrOfObject.forEach((item)=>{
   console.log(`Language Name:${item.codingLanguage}\nIts Extension: ${item.languageExtension}`);
})

