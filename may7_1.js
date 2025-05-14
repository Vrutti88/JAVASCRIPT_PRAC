let person={
    name: "vrutti",
    age: 18,
    city: "Nsvi Mumbai"
}

let person1={
    Pname: function(){
        console.log(this.name+" "+ this.age);
        return this.age;
    }
}

person1.Pname.call(person)
person1.Pname.apply(person)



arr=[1,2,3,4,5,6,7,8,9,10]
let iter=arr[Symbol.iterator]();
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())


function f1(num){
    return{
        name: "jayeta",
        age: 20
    }
}

console.log(f1().name);
console.log(f1().age);


// Generator concept
// function* f2(){
function *f2(){
    console.log("Hello")
    yield 1;
    console.log("World")
    yield 2;
}

const g=f2()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())