const prompt=require('prompt-sync')();
const candrive=(a)=>{
    return a>=18?true:false
}
// let a=prompt("enter your age:")
// a=Number.parseInt(a)
let runagain=true
while(runagain){
    let a=prompt("enter your age:")
a=Number.parseInt(a)
// const candrive=(a)=>{
//        return a>=18?true:false
// }
if(a<0){
    console.error("plese enter a valid age")
    break
}

if(candrive(a)){
    console.log("you can drive")
    
    
}
else{
    console.log("you cannot drive")
}

runagain=console.log("do you continue?")

}