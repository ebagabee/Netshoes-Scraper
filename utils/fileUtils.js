const fs = require('fs');
const path = require('path');

class FileUtils {
    constructor(filename = 'products.json') {
        this.filename = path.resolve(__dirname, '../', filename);
    }

    readFile() {
        if (fs.existsSync(this.filename)) {
            const data = fs.readFileSync(this.filename, 'utf8');
            return JSON.parse(data);
        }
        return [];
    }

    saveProductToFile(product) {
        const products = this.readFile();
        products.push(product);
        fs.writeFileSync(this.filename, JSON.stringify(products, null, 2));
    }
}

module.exports = { FileUtils };
