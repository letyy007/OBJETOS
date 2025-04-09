const endereco = {
    logradouro: " Rua Francisco bastos Magalhaes",
    cep: "46500000",
    estado: "bahia",
    municipio: "macaubas",
    contato: {
        nome: "Letícia Graziele",
    telefone: "xxxxxxxxx" ,
    whatsapp: "xxxxxxxxx"
    }
} ;

console.log(endereco["contato"]["nome"])
console.log(endereco["contato"].telefone)
