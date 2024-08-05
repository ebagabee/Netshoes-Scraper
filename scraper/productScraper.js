const puppeteer = require('puppeteer');
const { FileUtils } = require('../utils/fileUtils');

class ProductScraper {
    constructor(url) {
        this.url = url;
    }

    async scrape() {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(this.url, { waitUntil: 'networkidle0' });

        const product = await page.evaluate(() => {
            const title = document.querySelector('h1.product-name')?.innerText.trim() || 'Titulo nao encontrado';
            const price = document.querySelector('#content > div.showcase > div.buybox.showcase__buybox > div.buybox__buy-content > div.buybox__buy-content--info > div.price > div.price-box > div.price-box__saleInCents > div > span.saleInCents-value')?.innerText.trim() || 'Preco nao encontrado';
            const image = document.querySelector('#content > div.showcase > div.showcase__image-presenter--mobile > div.image-presenter-mobile > div.image-presenter-mobile__swiper-container.swiper-container.swiper-container-initialized.swiper-container-horizontal.swiper-container-pointer-events > div.swiper-wrapper > span.swiper-slide.swiper-slide-active > figure > img')?.src || 'Imagem nao encontrada';
            const description = document.querySelector('p.features--description')?.innerText.trim() || 'Descricao nao encontrada';

            return { title, price, image, description };
        });

        const fileUtils = new FileUtils();
        fileUtils.saveProductToFile(product);

        console.log('Informacoes sobre produto enviados para product.json');

        await browser.close();
    }
}

module.exports = { ProductScraper };
