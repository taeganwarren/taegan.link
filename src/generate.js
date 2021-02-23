const fs = require('fs');
const Handlebars = require('handlebars');

const render = (filename, links) => {
    const source = fs.readFileSync(filename, 'utf-8').toString();
    const template = Handlebars.compile(source);
    const output = template({ links: links });
    return output;
}

const links = JSON.parse(fs.readFileSync('src/links.json', 'utf8'));
fs.writeFileSync('public/index.html', render('src/index.handlebars', links), 'utf-8');