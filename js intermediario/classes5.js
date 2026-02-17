class Animal {
    constructor(name){
        this.name = name;
    }

    makeNoise(){
        console.log('Algum som genérico do animal')
    }
}

class Dog extends Animal {
    // Não é necessário o constructor, pois ele herda o constructor da classe pai (Animal)
}


const dog = new Dog('Rex');