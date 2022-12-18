//Class with properties of animals
class AnimalProperties {//class of animals without backbone
    constructor(){
        //applying abstraction
        if(this.constructor === AnimalProperties){
            throw new Error('Class cant be called or instantiated')
        }
    }
    //applying encapsulation
    #backbone(){
        console.log("has a backbone")
    }
    backboneCheck(){
        this.#backbone()
    }
    #coldBlooded(){
        console.log("is cold blooded")
    }
    coldBloodedCheck(){
        this.#coldBlooded()
    }
}

//the types of animals inherting 




class Aves extends AnimalProperties{//applied inheritance
    //applying polymorphism
    coldBloodedCheck(){
        console.log("is warm blooded")
    }
}

class Fish extends AnimalProperties{
    //no data needs to be changed
}

class Amphibia extends AnimalProperties{
    //no data needs to be changed
}

class Reptiles extends AnimalProperties{
    //no data needs to be changed
}

class Anthropoda extends AnimalProperties{
    backboneCheck(){
        console.log("doesnt have a backbone")
    }
}

class Mammals extends AnimalProperties{
    coldBloodedCheck(){
        console.log("is warm blooded")
    }
}

//instantiating the classes
var hawk = new Aves()
console.log("------------HAWK-----------")
console.log(hawk.coldBloodedCheck())
console.log(hawk.backboneCheck())

var butterfly = new Anthropoda()
console.log("------------BUTTERFLY---------")
console.log(butterfly.coldBloodedCheck())
console.log(butterfly.backboneCheck())

var shark = new Fish()
console.log("------------SHARK-------------")
console.log(shark.coldBloodedCheck())
console.log(shark.backboneCheck())

var frog = new Amphibia()
console.log("------------FROG-----------")
console.log(frog.coldBloodedCheck())
console.log(frog.backboneCheck())

var turtle = new Reptiles()
console.log("-------------TURTLE-----------")
console.log(turtle.coldBloodedCheck())
console.log(turtle.backboneCheck())

var cat = new Mammals()
console.log("-------------CAT-----------")
console.log(cat.coldBloodedCheck())
console.log(cat.backboneCheck())



