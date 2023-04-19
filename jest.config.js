module.exports = {
    preset: "ts-jest", // Define o preset do Jest que será utilizado para compilar e executar os testes escritos em TypeScript.
    testEnvironment: "node", // Define o ambiente de teste utilizado pelo Jest. Neste caso, estamos utilizando o ambiente "node", que permite que os testes sejam executados no ambiente Node.js.
    moduleDirectories: ["node_modules", "src"], // Define os diretórios que o Jest deve incluir ao procurar os módulos importados no seu projeto. Neste caso, estamos incluindo o diretório "node_modules" e o diretório "src".
    transform: { 
      ".+\\.ts$": "ts-jest",
    }, // Define as extensões de arquivos que serão transformadas pelo Jest. Neste caso, estamos definindo que todos os arquivos com extensão ".ts" serão transformados pelo "ts-jest", que é o preset para projetos em TypeScript.
    testMatch: ["<rootDir>/tests/*.(test|spec).ts"], // Define o padrão de busca de arquivos de teste que o Jest deve executar. Neste caso, estamos definindo que o Jest deve buscar por arquivos com extensão ".test.ts" ou ".spec.ts" no diretório "tests" na raiz do projeto.
  };