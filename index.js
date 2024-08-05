const readline = require('readline');
const { ProductScraper } = require('./scraper/productScraper');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a URL do produto: ', async (url) => {
    console.log('Dados estão sendo carregados...');
    try {
        const scraper = new ProductScraper(url);
        await scraper.scrape();
    } catch (error) {
        console.error('Erro:', error.message);
    } finally {
        rl.close();
    }
});
