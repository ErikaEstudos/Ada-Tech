//const nomesDeUsuarios = ["Joana", "Renata", "Cleber", "Zeca", "Carla"];
// console.log("Olá", nomesDeUsuarios[0]);
// console.log("Olá", nomesDeUsuarios[1]);
// console.log("Olá", nomesDeUsuarios[2]);
// console.log("Olá", nomesDeUsuarios[3]);
//let indiceDoUsuario = 0;
// while (indiceDoUsuario < nomesDeUsuarios.length) {
//   console.log("Olá", nomesDeUsuarios[indiceDoUsuario]);
//   indiceDoUsuario += 1;
// }

// const listaDeNumeros = [25, 88, 71, 192, 333, 222, 10, 11, 62];
// const listaDePares = [];
// const listaDeImpares = [];

// let indiceDoNumero = 0;

// while (indiceDoNumero < listaDeNumeros.length) {
//   if (listaDeNumeros[indiceDoNumero] % 2 === 0) {
//     listaDePares.push(listaDeNumeros[indiceDoNumero]);
//   } else {
//     listaDeImpares.push(listaDeNumeros[indiceDoNumero]);
//   }
//   indiceDoNumero += 1;
// }
// console.log(listaDePares);
// console.log(listaDeImpares);

const listaDeContatos = [
  "Paulo",
  "Selina",
  "Roger",
  "Zeca",
  "Rubens",
  "Josué",
  "Natália",
  "Bianca",
];

let encontrouUsuarioOuPercorreuLista = false;
let indiceDoUsuario = 0;

while (!encontrouUsuarioOuPercorreuLista) {
  const usuarioAtual = listaDeContatos[indiceDoUsuario];
  if (usuarioAtual.startsWith("Z")) {
    encontrouUsuarioOuPercorreuLista = true;
    console.log(`Usuário Encontrado: ${usuarioAtual}`);
  }
  indiceDoUsuario += 1;
  if (indiceDoUsuario === listaDeContatos.length) {
    encontrouUsuarioOuPercorreuLista = true;
    console.log("Usuário não foi encontrado");
  }
}
