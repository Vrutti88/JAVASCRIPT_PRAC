function C(num){
    console.log(num)
}
C=prompt("Enter the number")

far=(9/5*C)+32;
console.log(far);


let str=`"This is a string"`
console.log(str)
console.log(str.length)
console.log(str.at(3))
console.log(str.charCodeAt(3))
console.log(str.charAt(4))
console.log(str.indexOf("is"))
console.log(str.lastIndexOf("is"))
console.log(str.substring(0,5))
console.log(str.substring(0,-1))
console.log(str.slice(0,5))
console.log(str.slice(0,-1))


let str2="5"
console.log(str2.padStart(5,"*"))
console.log(str2.padEnd(5,"*"))