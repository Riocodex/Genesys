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
        console.log("i  have a backbone")
    }
    backboneCheck(){
        this.#backbone()
    }
    #coldBlooded(){
        console.log("I am cold blooded")
    }
    coldBloodedCheck(){
        this.#coldBlooded()
    }
}

//the types of animals inherting 




class Aves extends AnimalProperties{//applied inheritance
    //applying polymorphism
    coldBlooded(){
        console.log("I am warm blooded")
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
    backbone(){
        console.log("I dont have a backbone")
    }
}

class Mammals extends AnimalProperties{
    coldBlooded(){
        console.log("I am warm blooded")
    }
}


