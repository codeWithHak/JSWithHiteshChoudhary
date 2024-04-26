function job(data){
    return new Promise ((resolve,reject)=>{
       
       if (typeof data !== 'number'|| isNaN(data)){
            reject("error");
        }
        else if  (data % 2 !== 0 ){
           setTimeout(()=>{
            resolve("odd")    
        },1000) 
        }
        else if (data % 2 === 0){
            setTimeout(()=>{
                resolve("even")
            },2000)
        }
    }
)
    
}

job(13).then((res)=>{
    console.log(res);
})
.catch((rej)=>{
    console.log(rej);
})