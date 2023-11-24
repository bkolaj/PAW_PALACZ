const { Readable } = require('stream');
const { writeFile } = require('fs').promises;

async function* liczba() {
    for (let i = 0; i < 20; i++) {
        yield Math.floor(Math.random() * (2137 + 420) - 420);
    }
}

let toFile = '';
const readable = Readable.from(liczba());

readable.on('data', (chunk) => {
    toFile += `${chunk}\n`;
});

readable.on('end', async () => {
    await writeFile(`message-${Date.now().toString()}.txt`, toFile);
});