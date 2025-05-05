let obj={name:"Vrutti", age: 18};

console.log(obj)
delete(obj.age)
console.log(obj)
obj.sub="CSE"
console.log(obj)

let ob2={};
console.log(ob2)



let unit={}
unit.name="raju";
unit.age=60;
console.log(unit)
for(x in unit){
    console.log(x,unit[x])
}



let arr=[1,2,3,4,5,3,4,2]
for(x of arr){
    console.log(x)
}