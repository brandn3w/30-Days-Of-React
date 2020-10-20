class Animal{
constructor(name, age, color, paws){
    this.name=name
    this.age = age
}
}

const animal = new Animal()
console.log(animal)


class Cat extends Animal{ 
    constructor(name, age, color, paws)
    super(name, age, color, paws)
}