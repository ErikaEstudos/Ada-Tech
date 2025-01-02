const rl = require("readline");
//Essa linha importa o módulo readline do Node.js, que é essencial para criar
//interfaces de linha de comando e permitir a interação com o usuário.

const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//É criada uma interface de linha de comando usando a função createInterface do
//módulo readline. Os parâmetros input e output são configurados para usar a entrada
//padrão (stdin) e a saída padrão (stdout), respectivamente.
//Isso significa que a interface irá ler a entrada do usuário a partir do teclado e
//exibir a saída no console.

const promptPromise = {
  question: (pergunta) =>
    new Promise((resolve) => {
      prompt.question(pergunta, (resposta) => {
        resolve(resposta);
      });
    }),
  close: () => prompt.close(),
};
// Este bloco cria um objeto promptPromise com duas propriedades:
//question: Uma função que retorna uma promessa. Essa função é usada para fazer uma pergunta ao usuário. A promessa é resolvida quando o usuário fornece uma resposta.
//close: Uma função que fecha a interface de linha de comando.

async function askUser() {
  try {
    const numero = await promptPromise.question("Qual seu número favorito?: ");
    //Nesta linha, a função question do objeto promptPromise é chamada para fazer a
    //pergunta ao usuário. A palavra-chave await faz com que a execução da função
    //askUser pause até que o usuário digite a resposta. O valor digitado pelo
    //usuário é armazenado na variável numero.
    console.log(`O dobro do seu número é: ${parseInt(numero) * 2}`);
    //O código converte a resposta do usuário para um número inteiro usando parseInt e calcula o dobro.
    //Em seguida, o resultado é exibido no console.
    const cor = await promptPromise.question("Qual sua cor preferida?");
    console.log(`Sua cor favorita é ${cor}`);
  } finally {
    promptPromise.close();
  }
}
//A função askUser é definida como assíncrona, o que permite o uso da palavra-chave
//await para esperar que as promessas sejam resolvidas. O bloco try...finally é usado
//para garantir que a interface seja fechada, mesmo que ocorra algum erro durante a
//execução.
askUser();
//A função askUser é chamada para iniciar o processo de fazer perguntas ao usuário e
//exibir as respostas.
