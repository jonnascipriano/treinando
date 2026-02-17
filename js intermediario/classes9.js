class MyCustomError {
    constructor(message) {
        this.message = "CLASSE DE ERRO CUSTOMIZADA: " + message;
    }
}

try {
    throw new Error("Erro genérico.");
    throw new MyCustomError("Este é um erro personalizado.");
} catch (error) {
    if(error instanceof MyCustomError) {
        console.log(error.message);
    } else {
        console.log("Ocorreu um erro desconhecido.");
    }
}