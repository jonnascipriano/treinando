// class Animal {
//     constructor(name){
//         this.name = name;
//     }

//     makeNoise(){
//         console.log('Algum som genérico do animal')
//     }
// }

// class Dog extends Animal {
//     // Não é necessário o constructor, pois ele herda o constructor da classe pai (Animal)
//     makeNoise(){
//         console.log('Au...au...au...')
//     }
// }


// const dog = new Dog('Rex');
// console.log(dog.name); // Saída: Rex
// dog.makeNoise(); // Saída: Au au!

// class Cat extends Animal {
//     makeNoise(){
//         console.log("Miau...Miau...Miau...")
//     }
// }

// const cat = new Cat('Mel');
// console.log(cat.name); // Saída: Mel
// cat.makeNoise(); // Saída: Algum som genérico do animal
