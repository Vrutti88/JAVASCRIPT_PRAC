class A{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class B extends A{
    constructor(name,age,dob){
        super(name,age)
        this.dob=dob;
    }
}
class C extends A{
    constructor(name,age,rollno){
        super(name,age)
        this.rollno=rollno;
    }
}
class D extends A{
    constructor(name,age,func){
        super(name,age)
        this.func=func;
    }
}
let fun=()=>{
    console.log("Hello")
}

let b=new B("def",14,27)
console.log(b)
let c=new C("abc",12,30)
console.log(c)
let d=new D("abc",12)
console.log(d)





function person(fname,lname){
    let firstname=fname;
    let lastname=lname;

    let getdetails_noaccess=function (){
        return(`First name is: ${firstname}, Last name is: ${lastname}`);
    }

    this.getdetails_access=function (){
        return(`First name is: ${firstname}, Last name is: ${lastname}`);
    }
}
let person1=new person('Vrutti','Patil');
console.log(person1.firstname)
console.log(person1.getdetails_noaccess)
console.log(person1.getdetails_access())


