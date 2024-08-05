# Web Scraper para Netshoes

Este projeto é um web scraper para extrair informações de produtos do site [Netshoes](https://www.netshoes.com.br/) usando o Puppeteer. O scraper coleta informações como título, preço, imagem e descrição dos produtos e as salva em um arquivo JSON.

## Requisitos

- **Node.js**: Certifique-se de que o Node.js esteja instalado em sua máquina. Você pode verificar a instalação com o comando `node -v`.

## Instalação

1. **Clone o repositório:**

```bash
    git clone <URL_DO_REPOSITORIO> 
    cd <NOME_DO_DIRETORIO>
```
    
2. **Instale as dependências:**
    
Execute o seguinte comando para instalar as dependências necessárias:

```bash
    npm install
```
    
Este comando instalará o Puppeteer e outras dependências necessárias para o projeto.
    

## Configuração

1. **Configure o Puppeteer:**
    
O Puppeteer será usado para automatizar a navegação e extração de dados da página da web. Não há necessidade de configuração adicional, mas certifique-se de que o Puppeteer está instalado corretamente.
    
## Uso

1. **Execute o scraper:**
    
Execute o script `index.js` para iniciar o processo de scraping. O script solicitará a URL do produto que você deseja extrair.

```bash
node index.js
```
Ou: 

```bash
node index.js
```

2. **Digite a URL do produto:**

Quando solicitado, insira a URL do produto da Netshoes que você deseja extrair.
    
    
```bash
    Digite a URL do produto: https://www.netshoes.com.br/produto-exemplo
```

O scraper irá buscar os dados do produto e salvar as informações em um arquivo JSON chamado `products.json`.
    
3. **Verifique o arquivo JSON:**
    
Após a execução do script, você encontrará um arquivo chamado `products.json` no diretório do projeto. Este arquivo conterá uma lista de produtos, incluindo as informações extraídas:

```json
    
    [   
        {    
        
        "title": "Tênis Puma Flyer Runner Mesh Bdp Masculino - Preto",     
        "price": "R$ 232,79",     
        "image": "https://static.netshoes.com.br/produtos/tenis-puma-flyer-runner-mesh-bdp-masculino/06/2I3-9913-006/2I3-9913-006_zoom1.jpg?ts=1718287423?ims=400x",     
        "description": "Vá além com a Puma! O Tênis Puma Flyer Flex Bdp Masculino é uma opção versátil de tênis esportivo para te acompanhar na corrida, na academia e no dia a dia..."
        } 
    ]
```

## Estrutura do Projeto

- **`index.js`**: O script principal que solicita a URL do produto e inicia o processo de scraping.
- **`scraper/productScraper.js`**: Contém a lógica para extrair informações do produto usando Puppeteer.
- **`utils/fileUtils.js`**: Manipula a leitura e escrita do arquivo JSON.
- **`products.json`**: Arquivo onde os dados dos produtos são salvos.