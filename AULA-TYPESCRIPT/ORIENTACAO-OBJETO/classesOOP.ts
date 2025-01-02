// class Estabelecimento{
//     private endereco: String
//     private setor: String
//     private produtos: Produto[]

//    constructor(endereco: string, setor: string, produtos: Produto[]){
//     this.endereco= endereco
//     this.setor=setor
//     this.produtos=produtos
//    } 
// }
export type Produto={
    nome:string
    valor: number
}

class EstabelecimentoBase{
    private _filaDeEspera = 10
  
    constructor(
        public endereco: string, 
        public setor: string, 
        private produtos: Produto[],
        filaDeEspera?:number
    ){
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    public retornaNomeDosProdutos(){
        return this.produtos.map(produto => produto.nome)
    }

    get filaDeEspera(){
        return this._filaDeEspera
    }
    
    set filaDeEspera(fila: number){
        if(fila <= 0 ){
            return
        }else{
            this._filaDeEspera = fila
        }
    }
    

    diminuiFilaDeEspera(){
       if(this._filaDeEspera === 0){
        return
       }else{
        this._filaDeEspera -= 1
       }
    }
}
const padaria = {
    endereco : "Rua das Flores, 320 bloco D Veredas",
    setor: "alimentação",
    produtos:[
        {nome: "pão", valor: 0.8},  
        {nome: "leite", valor: 1.8}, 
        {nome: "bolo", valor: 3.5},  
        {nome: "queijo", valor: 2.5},
    ],
    retornaNomeDosProdutos(){
        return this.produtos.map(produto => produto.nome)
    }
}

const padaria2 = {
    endereco : "Rua das Margaridas, 120",
    setor: "alimentação",
    produtos:[
        {nome: "pão", valor: 0.8},  
        {nome: "leite", valor: 1.8}, 
        {nome: "bolo", valor: 3.5},  
        {nome: "queijo", valor: 2.5},
    ],
}

const padaria3 = new EstabelecimentoBase( 
    "Rua das Margaridas, 120",
    "alimentação",
    [
        {nome: "banana", valor: 8},  
        {nome: "beijinho", valor: 1.5}, 
        {nome: "carne moida", valor: 20},  
    ],
    -3
)

const padaria4 = new EstabelecimentoBase( 
    "Rua das Rosas, 200",
    "alimentação",
    [],
    27
)


console.log(padaria);
console.log(padaria.retornaNomeDosProdutos())
//console.log(padaria2.retornaNomeDosProdutos())
padaria3.retornaNomeDosProdutos()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
// padaria4.filaDeEspera = -100
padaria4.filaDeEspera = 20
console.log(padaria4.filaDeEspera)
console.log(padaria3.endereco)
console.log(padaria3.filaDeEspera)

