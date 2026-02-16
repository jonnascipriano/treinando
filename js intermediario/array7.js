let fruits = ["Banana", "Maçã", "Laranja"]

// Verificar se um item existe no array
console.log(fruits.includes("Maçã")) // true
console.log(fruits.includes("Morango")) // false

// Verificar se existe um item no array ignorando Case Sensitive
console.log(fruits.toString().toLowerCase().includes("banana")) // true