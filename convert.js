var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, '_redirects');
var f = fs.readFileSync(filePath, {encoding: 'utf-8'}, 
    function(err){console.log(err);});

f = f.split("\n");

var json = [];
let counter = 0;
f.forEach(function(d){
    tmp = {};
    row = d.split(/ +/);
    if (row[0] === '/*' || row[0] === '') {
        return;
    }
    tmp['id'] = counter;
    tmp['slug'] = row[0];
    tmp['link'] = row[1];
    json.push(tmp);
    counter++;
});

var outPath = path.join(__dirname, '/src/links.json');
fs.writeFileSync(outPath, JSON.stringify(json), 'utf8', 
    function(err){console.log(err);});