// // Intl é a API de Internacionalização do JavaScript, que fornece uma maneira de formatar números, datas e moedas de acordo com as convenções de um idioma específico. Ela é especialmente útil para criar aplicativos que precisam ser adaptados para diferentes regiões e culturas.

// // Otbém informações da localidade

// const currentLocale = Intl.DateTimeFormat().resolvedOptions()

// console.log(currentLocale)

// // Formata a data de acordo com a localidade
// console.log(new Intl.DateTimeFormat('pt-BR').format(new Date()))
// console.log(new Intl.DateTimeFormat('en-US').format(new Date()))

// const date = new Date()

// // Obtém a diferença em minutos do timezone
// console.log(date.getTimezoneOffset())

// // Obtém a diferença em horas do timezone
// console.log(date.getTimezoneOffset() / 60)