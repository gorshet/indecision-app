class Person {
    constructor(name = "Anonymous") {
    this.name = name;
    }
    etGretting(){
    return `Hi, i am ${this.name}`
    }
}

const me = new Person ('Jorge Montes');
console.log(me.etGretting());

const other = new Person ();
console.log(other.etGretting());