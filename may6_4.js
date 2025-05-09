function f1(inp){
    console.log(inp)
}
f1=prompt("Enter a string")
console.log(f1)
console.log(f1.slice(1))


let arr=["abc","bcd","cde","def","efg"]
function f1(inp){
    console.log(inp)
}
f1=prompt("Enter a string")
console.log(f1)
console.log(arr.indexOf(f1))



// In Javascript if we declare only one argument in a function and gives n number of inputs it will ignore all the inputs and take only first one. It does not throw any error.
// eg:-
let func=function demo(num1,num2,num3){
    console.log(num1)
}
console.log(demo(2,3,4))

function demo2(...num1){
    console.log(num1)
}
demo2(2,3,4,5,6,7)