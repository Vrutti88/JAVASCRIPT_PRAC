class person{
    constructor(name,age,loc){
        this.name=name;
        this.age=age;
        this.loc=loc;
    }
    Pname(){
        console.log(this.name+" "+this.age);
        return this.age;
    }
}
const p1=new person("Vrutti", 18, "New York")
console.log(p1)
console.log(p1.Pname)


class vehicle{
    constructor(companyname,productname,model){
        this.companyname = companyname;
        this.productname = productname;
        this.model = model;
    }
}
class car extends vehicle{
}
const v1 = new vehicle("Mahindra", "Scorpio", 2024);
const v2 = new vehicle("Tata", "Nexon", 2023);
const v3 = new vehicle("Maruti", "Swift `", 2022);
console.log(v1)
console.log(v2)
console.log(v3)