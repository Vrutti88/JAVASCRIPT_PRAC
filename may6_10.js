
let arr=["abc","def"]
let arr2=["ghi","jkl"]

for(x of arr2){
    arr.push(x)
}
console.log(arr)

let num1=3
let num2=8
let arr3=[1,2,3,4,5,6,7,8,9,10]
let arr4 = []
let func=((x)=>x>num1 && x<num2)
console.log(arr3.filter(func))