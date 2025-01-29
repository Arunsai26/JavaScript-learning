let arr=[0,23,5,88,454,66]
let b=arr.map((value)=>{
return value*value
})
console.log(b)
let c=arr.filter((value)=>{
    return value>80
}

)
console.log(c)
//reduce an array into single value
let d=arr.reduce((h1,h2)=>{
    return h1+h2

}
)
console.log(d)
