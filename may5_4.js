let hr=new Date().getHours();
console.log(hr);
let min=new Date().getMinutes();
console.log(min)
let sec=new Date().getSeconds();
console.log(sec)

let num=prompt("Hello")
console.log(typeof num);
let num1=Number(num)
console.log(typeof num1)


function f1(num){
    console.log(typeof num)
}
f1(prompt("Enter a value"))
let f2=Number(f1)
console.log(typeof f2)