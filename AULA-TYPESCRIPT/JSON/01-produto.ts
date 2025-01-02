type Product = {
    name: string  //nome
    amountInStock: number  //quantidade no estoque
    unitValue: number  //valor da unidade do produto
    barCode?: string //código de barra
}

const product1 = {
    name: "Pair of Socks",  //par de meias
    amountInStock: 100,
    unitValue: 5,
    barCode: "asfasf",
}
const product2 = {
    name: "T-Shirt",  //camiseta
    amountInStock: 500,
    unitValue: 45,
}