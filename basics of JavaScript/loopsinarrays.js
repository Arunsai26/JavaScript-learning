let num=[4,5,6,9]
for(let i=0;i<num.length;i++){
    console.log(num[i])
}
// for(let i of num){
//     console.log(num[i])
// }
num.forEach((ele)=> {
    console.log(ele*ele)
})
//method used to convert html collection to array
let name="arunsai"
let c=Array.from(name)
console. log(c)
let d="arun"
for(let j of d){
    console.log(j)
}
for(let j in  d){
    console.log(j)
}

