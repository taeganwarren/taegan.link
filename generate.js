const Handlebars = require('handlebars');
const fs = require('fs');

const links = require('./links.json');

const link_partial = require('./src/link.handlebars');
const main_layout = require('./src/main.handlebars');
const linkPage = require('./src/linkPage.handlebars');

Handlebars.registerPartial('link', link_partial);

fs.writeFileSync('public/index.html', main_layout({
    body: linkPage({
        links: links
    })
}, 'utf-8'));