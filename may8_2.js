function person(name, age, loc){
    this.name=name;
    this.age=age;
    this.loc=loc;
    this.func=function(){
        console.log("hello")
    }
}

const p1=new person("Vrutti",20,"New York")
person.prototype.func="hello"
console.log(p1.func())
console.log(p1)