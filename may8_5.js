class rectangle{
    constructor(){
        this.height=3;
        this.width=5;

        this.area=function(){
            return(`Area is: ${this.height*this.width}`);
        }

        this.perimeter=function(){
            return(`Perimeter is: ${2*(this.height+this.width)}`);
        }
    }
}
let r1=new rectangle()
console.log(r1.area())
console.log(r1.perimeter())






class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makesound() {
        console.log("Sound: "+this.sound);
    }
}

class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound);
        this.color = color;
    }

    makesound() {
        console.log(`Species: ${this.species}, Color: ${this.color}`);
        super.makesound()
    }
}

let d1 = new Dog("Labrador", "Barking", "Black");
d1.makesound();






class Bank{
    constructor(name){
        this.name=name;
        this.branches=[];
    }
    addbranch(branch){
        this.branches.push(branch);
        console.log(branch + " branch added.");
    }
    removebranch(branch){
        let index = this.branches.indexOf(branch);
        if (index !== -1) {
            this.branches.splice(index, 1);
            console.log(branch + " branch removed.");
        } else {
            console.log(branch + " branch not found.");
        }
    }
    display(){
        console.log("Branches of " + this.name + ":");
        this.branches.forEach(branch => {
            console.log("- " + branch);
        });
    }
}
let myBank = new Bank("My Bank");

myBank.addbranch("Mumbai");
myBank.addbranch("Pune");
myBank.display();

myBank.removebranch("Pune");
myBank.display();
