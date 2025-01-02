// -------------------IMPORTANDO MÓDULOS---------------------------------------
const path = require("node:path");
//Importa o módulo path do Node.js, que fornece utilitários para trabalhar com caminhos de arquivos.
const fs = require("node:fs");
//Importa o módulo fs (file system), que oferece uma interface para interagir com o sistema de arquivos.
const dotenv = require("dotenv");
//Importa o módulo dotenv para carregar variáveis de ambiente a partir de um arquivo .env
//------------------------------------------------------------------------------
//---------------------CONFIGURANDO VARIÁVEIS-----------------------------------
dotenv.config();
// Carrega as variáveis de ambiente do arquivo .env para o processo.
const filePath = path.join(process.cwd(), "AULA-NODE", "texto.txt");
//Define o caminho completo para o arquivo de entrada (texto.txt).
const fileOutPath = path.join(
  process.cwd(),
  "AULA-NODE",
  "texto-com-linhas.txt"
);
// Define o caminho completo para o arquivo de saída (texto-com-linhas.txt).
//------------------------------------------------------------------------------
//----------------------IMPRIMINDO INFORMAÇÕES----------------------------------
console.log(filePath);
//Imprime o caminho completo do arquivo de entrada no console.
//------------------------------------------------------------------------------
//---------------------INICIANDO CRONÔMETROS------------------------------------
console.time("leitura do arquivo");
//Inicia um cronômetro para medir o tempo de execução da leitura do arquivo.
console.time("manipular arquivos");
//Inicia um cronômetro para medir o tempo de execução da manipulação dos dados do arquivo.
//-------------------------------------------------------------------------------
//--------------------LENDO O ARQUIVO--------------------------------------------
fs.readFile(filePath, {}, (erro, dados) => {
  if (erro) {
    console.error(`Erro na leitura do arquivo no caminho ${filePath}`);
    return;
  }
  //Lê o arquivo especificado em filePath de forma assíncrona.
  //Se ocorrer algum erro durante a leitura, ele será passado para a função de callback.
  //O conteúdo do arquivo lido é passado como um buffer.
  // Verifica se ocorreu algum erro durante a leitura do arquivo. Se sim, imprime uma mensagem de erro no console.
  console.timeEnd("leitura do arquivo");
  //--------------------------------------------------------------------------------
  //-------------------CONVERTENDO DADOS E MANIPULANDO LINHAS-----------------------
  const texto = dados.toString();
  //Converte o buffer de dados em uma string.
  const linhas = texto.split("\n");
  //Divide a string em um array de linhas, usando o caractere de nova linha como delimitador.
  const linhasAjustadas = linhas.map(
    (linha, index, arrayDeLinhas) => `${index + 1} - ${linha}`
  );
  // Cria um novo array com as linhas ajustadas, adicionando um número e um hífen no início de cada linha.
  //----------------------------------------------------------------------------------
  //--------------------ESCREVENDO ARQUIVO--------------------------------------------
  fs.writeFile(fileOutPath, linhasAjustadas.join("\n"), {}, (erro) => {
    if (erro) {
      console.error(`Erro na escrita do arquivo no caminho ${fileOutPath}`);
    }
    //Escreve o conteúdo do array linhasAjustadas em um novo arquivo, com as linhas separadas por novas linhas.
    // Se ocorrer algum erro durante a escrita, ele será passado para a função de callback.
    //----------------------------------------------------------------------------------
    //----------------Finalizando Cronômetros e Imprimindo Mensagem---------------------
    console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`);
    // Imprime uma mensagem indicando que o arquivo foi salvo (embora não haja código explicitamente para salvar em um bucket S3).
    console.timeEnd("manipular arquivos");
    //Finaliza o cronômetro para medir o tempo de execução da manipulação dos dados do arquivo.
  });
});

// ------Existem consoles :---------------------------------------------------
// console.log()
//console.error()
//console.dir()
//console.table()
//console.time()
//console.timeEnd()
