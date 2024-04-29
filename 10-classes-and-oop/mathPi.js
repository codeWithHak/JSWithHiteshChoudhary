const chai = {
    name:"karak chai",
    price:60,
    isKarak: true,

    ubaal:function (){
        console.log("doodh ubal ke gir gaya");
    }
}
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false,
    configurable:false
})
// const setChai = Object.getOwnPropertyDescriptor(chai, "name")


for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') { 
        console.log(`${key}: ${value}`);
    }
}