let arr=[1,2,3,4,5,6,7,8,9,10]
arr.forEach((x,y,z)=>{
    console.log("Value: ",x)
    console.log("Index: ",y)
    console.log("Array: ",z)
})


arr.map((x,y,z)=>{
    console.log(x*2)
})

arr.filter((x,y,z)=>{
    if(x%2==0){
        console.log(x)
    }
})

let func=((x,y,z)=>{
    if(x%2==0){
        console.log(x)
    }
})

arr.filter(func)

