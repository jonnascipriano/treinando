/*
    OBJETO
        - Uma coleção de dados e/ou funcionalidades;
        - Podem ter propriedades e métodos;
*/


// Criando um objeto
const obj = {}
console.log(obj)
console.log(typeof obj)

// Criando um objeto com propriedades e métodos
const user = {
    // Propriedades : Valores
    email: 'jonnascipriano@gmail.com',
    age: 20,
    name: {
        firstName: 'Jonnas',
        lastName: 'Cipriano'
    },
    address:{
        street: 'Rua 1',
        number: 123,
        city: 'São Paulo',
        postal_code: '12345-678'
    },
    message: () => {
        console.log(`Olá, ${user.name.firstName}!`)
    }
}
user.message()